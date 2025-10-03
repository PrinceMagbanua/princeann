import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Check, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";

// Mock guest data - in a real app, this would come from a database
const guestList = [
  { id: 1, name: "John Smith", group: ["John Smith", "Jane Smith", "Emily Smith"], groupName: "The Smith Family" },
  { id: 2, name: "Jane Smith", group: ["John Smith", "Jane Smith", "Emily Smith"], groupName: "The Smith Family" },
  { id: 3, name: "Emily Smith", group: ["John Smith", "Jane Smith", "Emily Smith"], groupName: "The Smith Family" },
  { id: 4, name: "Michael Johnson", group: ["Michael Johnson"], groupName: "Michael Johnson" },
  { id: 5, name: "Sarah Williams", group: ["Sarah Williams", "David Williams"], groupName: "The Williams" },
  { id: 6, name: "David Williams", group: ["Sarah Williams", "David Williams"], groupName: "The Williams" },
  { id: 7, name: "Lisa Brown", group: ["Lisa Brown"], groupName: "Lisa Brown" },
  { id: 8, name: "Robert Garcia", group: ["Robert Garcia", "Maria Garcia", "Carlos Garcia"], groupName: "The Garcia Family" },
];

const RSVPSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string[] | null>(null);
  const [attendingMembers, setAttendingMembers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedGroup(null);
    setAttendingMembers([]);
    setSubmitted(false);
  };

  const filteredGuests = searchQuery
    ? guestList.filter((guest) =>
        guest.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Remove duplicates by group
  const uniqueGroups = Array.from(
    new Map(
      filteredGuests.map((guest) => [guest.groupName, guest])
    ).values()
  );

  const handleSelectGuest = (guest: typeof guestList[0]) => {
    setSelectedGroup(guest.group);
    setAttendingMembers(guest.group);
    setSearchQuery("");
  };

  const toggleMember = (member: string) => {
    setAttendingMembers((prev) =>
      prev.includes(member)
        ? prev.filter((m) => m !== member)
        : [...prev, member]
    );
  };

  const handleSubmit = () => {
    if (attendingMembers.length === 0) {
      toast.error("Please select at least one person attending");
      return;
    }
    setSubmitted(true);
    toast.success("RSVP submitted successfully!");
  };

  return (
    <section className="py-20 px-4 bg-background">
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

              {searchQuery && uniqueGroups.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mb-8 max-h-60 overflow-y-auto rounded-lg border bg-secondary/20 p-4"
                >
                  {uniqueGroups.map((guest) => (
                    <button
                      key={guest.id}
                      onClick={() => handleSelectGuest(guest)}
                      className="flex w-full items-center gap-3 rounded-md p-3 text-left transition-colors hover:bg-secondary"
                    >
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{guest.groupName}</p>
                        <p className="text-sm text-muted-foreground">
                          {guest.group.length} {guest.group.length === 1 ? "person" : "people"}
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
                  <h3 className="mb-4 text-xl font-semibold">
                    Who will be attending?
                  </h3>
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
                >
                  <Check className="mr-2 h-5 w-5" />
                  Confirm RSVP
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
