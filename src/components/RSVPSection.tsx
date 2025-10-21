import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Check, Users, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { fetchRsvpList, updateAttendance, type RsvpRow } from "@/lib/rsvpApi";

type Group = {
  groupId: string;
  groupName: string;
  members: { id: string; name: string; attendance?: string }[];
  rows: RsvpRow[];
};

const RSVPSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState<string[] | null>(null);
  const [selectedGroupRows, setSelectedGroupRows] = useState<RsvpRow[] | null>(null);
  const [attendingMembers, setAttendingMembers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchRsvpList();
        // Group by GroupId
        const map = new Map<string, RsvpRow[]>();
        for (const r of data.rows) {
          const key = String(r.GroupId || r.ID);
          const arr = map.get(key) || [];
          arr.push(r);
          map.set(key, arr);
        }
        const gs: Group[] = Array.from(map.entries()).map(([groupId, rows]) => {
          const groupName = (rows[0].GroupName && String(rows[0].GroupName).trim()) || rows[0].Name;
          return {
            groupId,
            groupName,
            members: rows.map((r) => ({ id: r.ID, name: r.Name, attendance: r.Attendance })),
            rows,
          };
        });
        setGroups(gs);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        toast.error(message || "Failed to load RSVP list");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedGroup(null);
    setAttendingMembers([]);
    setSubmitted(false);
  };

  const filteredGroups = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [] as Group[];
    return groups.filter((g) => {
      if (g.groupName.toLowerCase().includes(q)) return true;
      return g.members.some((m) => m.name.toLowerCase().includes(q));
    });
  }, [groups, searchQuery]);

  const handleSelectGuest = (g: Group) => {
    const memberNames = g.members.map((m) => m.name);
    setSelectedGroup(memberNames);
    setSelectedGroupRows(g.rows);
    setAttendingMembers(memberNames);
    setSearchQuery("");
  };

  const toggleMember = (member: string) => {
    setAttendingMembers((prev) =>
      prev.includes(member)
        ? prev.filter((m) => m !== member)
        : [...prev, member]
    );
  };

  const handleSubmit = async () => {
    if (!selectedGroupRows || attendingMembers.length === 0) {
      toast.error("Please select at least one person attending");
      return;
    }
    try {
      setSubmitting(true);
      // Update selected members to "Going"; leave others unchanged for now
      for (const row of selectedGroupRows) {
        if (attendingMembers.includes(row.Name)) {
          await updateAttendance(row.ID, "Going");
        }
      }
      setSubmitted(true);
      toast.success("RSVP submitted successfully!");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      toast.error(message || "Failed to submit RSVP");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="rsvp-section" className="py-20 px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-3xl"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-5xl font-bold text-foreground md:text-6xl">
            RSVP
          </h2>
          <p className="text-lg text-muted-foreground">
            We can't wait to celebrate with you
          </p>
        </div>

        <Card className="border-none bg-card p-8 shadow-xl md:p-12">
          {!submitted ? (
            <>
              <div className="mb-8">
                <label className="mb-2 block text-sm font-medium">
                  Find your name
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for your name..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {searchQuery && filteredGroups.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mb-8 rounded-lg border bg-secondary/20 p-4"
                >
                  {filteredGroups.map((g) => (
                    <button
                      key={g.groupId}
                      onClick={() => handleSelectGuest(g)}
                      className="flex w-full items-center gap-3 rounded-md p-3 text-left transition-colors hover:bg-secondary"
                    >
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{g.groupName}</p>
                        <p className="text-sm text-muted-foreground">
                          {g.members.length} {g.members.length === 1 ? "person" : "people"}
                        </p>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}

              {selectedGroup && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">
                      Who will be attending?
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedGroup(null);
                        setAttendingMembers([]);
                      }}
                      className="gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to search
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {selectedGroup.map((member) => (
                      <div
                        key={member}
                        className="flex items-center gap-3 rounded-lg border bg-secondary/10 p-4 transition-colors hover:bg-secondary/20"
                      >
                        <Checkbox
                          id={member}
                          checked={attendingMembers.includes(member)}
                          onCheckedChange={() => toggleMember(member)}
                        />
                        <label
                          htmlFor={member}
                          className="flex-1 cursor-pointer text-base font-medium"
                        >
                          {member}
                        </label>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {selectedGroup && (
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                  disabled={submitting}
                >
                  <Check className="mr-2 h-5 w-5" />
                  {submitting ? "Submitting..." : "Confirm RSVP"}
                </Button>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-primary/10 p-6">
                  <Check className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Thank You!</h3>
              <p className="mb-6 text-lg text-muted-foreground">
                We're thrilled you'll be joining us
              </p>
              <div className="rounded-lg bg-secondary/20 p-4">
                <p className="mb-2 font-medium">Attending:</p>
                <ul className="space-y-1">
                  {attendingMembers.map((member) => (
                    <li key={member} className="text-muted-foreground">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </Card>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
