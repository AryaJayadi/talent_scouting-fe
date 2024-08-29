import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export interface RequirementProps {
  idx: number;
  requirement: string;
}

export interface SkillProps {
  idx: number;
  skillTitle: string;
  skillDescription: string;
}

export interface SectionProps {
  idx: number;
  sectionTitle: string;
  sectionDescription: string;
}

function NewVacancyPage() {
  const [jobPosition, setJobPosition] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [jobLocation, setJobLocation] = useState<string>("");
  const [salaryStart, setSalaryStart] = useState<number>();
  const [salaryEnd, setSalaryEnd] = useState<number>();
  const [workTimeType, setWorkTimeType] = useState<string>();
  const [jobType, setJobType] = useState<string>();
  const [requirements, setRequirements] = useState<RequirementProps[]>([
    {
      idx: 0,
      requirement: "",
    },
  ]);
  const [skills, setSkills] = useState<SkillProps[]>([
    {
      idx: 0,
      skillTitle: "",
      skillDescription: "",
    },
  ]);
  const [sections, setSections] = useState<SectionProps[]>([]);

  const handlePublish = () => {
    const body = {};
  };

  const [idx, setIdx] = useState<number>(1);
  const [skillIdx, setSkillIdx] = useState<number>(1);
  const [sectionIdx, setSectionIdx] = useState<number>(0);

  const addInput = () => {
    setRequirements([...requirements, { idx: idx, requirement: "" }]);
    setIdx(idx + 1);
  };

  const removeComponent = (idx: number) => {
    if (requirements.length >= 2) {
      setRequirements(requirements.filter((req) => req.idx !== idx));
    }
  };

  const handleInputChange = (idx: number, value: string) => {
    setRequirements(
      requirements.map((req) =>
        req.idx === idx ? { ...req, requirement: value } : req
      )
    );
  };

  const addSkillInput = () => {
    setSkills([
      ...skills,
      { idx: skillIdx, skillTitle: "", skillDescription: "" },
    ]);
    setSkillIdx(skillIdx + 1);
  };

  const removeSkillComponent = (idx: number) => {
    if (skills.length >= 2) {
      setSkills(skills.filter((skill) => skill.idx !== idx));
    }
  };

  const addSectionInput = () => {
    setSections([
      ...sections,
      {
        idx: sectionIdx,
        sectionTitle: "",
        sectionDescription: "",
      },
    ]);
    setSectionIdx(sectionIdx + 1);
  };

  const removeSectionComponent = (idx: number) => {
    setSections(sections.filter((section) => section.idx !== idx));
  };

  return (
    <Layout>
      <div className="mx-[70px] pb-10">
        <div className="text-[32px] mt-4 text-center font-semibold">
          New Vacancy
        </div>

        <div className="flex flex-col items-center">
          <div className="mx-[70px] max-w-[700px] w-full ">
            <div className="my-4">
              <label className="font-medium">Job Position</label>
              <Input
                className="mt-2 border-[#b1b1b1]"
                placeholder="Job Position"
                onChange={(e) => setJobPosition(e.target.value)}
              />
            </div>

            <div className="my-4">
              <label className="font-medium">Job Description</label>
              <Textarea
                className="mt-2 border-[#b1b1b1]"
                placeholder="Job Description"
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            <div className="my-4">
              <label className="font-medium">Job Location</label>
              <Input
                className="mt-2 border-[#b1b1b1]"
                placeholder="Job Location"
                onChange={(e) => setJobLocation(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between my-4 w-full">
              <div className="w-[45%]">
                <label className="font-medium">Salary Range (In IDR)</label>
                <Input
                  className="mt-2 border-[#b1b1b1] w-full"
                  placeholder="Start Range"
                  onChange={(e) => setSalaryStart(parseInt(e.target.value))}
                />
              </div>

              <div className="text-[24px] mt-8 flex items-center h-full">
                <div>-</div>
              </div>

              <div className="my-4 mt-[24px] w-[45%]">
                <Input
                  className="mt-6 border-[#b1b1b1] w-full"
                  placeholder="End Range"
                  onChange={(e) => setSalaryEnd(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="my-4">
              <div className="mb-2">
                <label className="font-medium">Work Time Type</label>
              </div>
              <Select onValueChange={(value) => setWorkTimeType(value)}>
                <SelectTrigger className="border-[#b1b1b1]">
                  <SelectValue placeholder="Work Time Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full Time">Full Time</SelectItem>
                  <SelectItem value="Part Time">Part Time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="my-4">
              <div className="mb-2">
                <label className="font-medium">Job Type</label>
              </div>
              <Select onValueChange={(value) => setJobType(value)}>
                <SelectTrigger className="border-[#b1b1b1]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Work From Office</SelectItem>
                  <SelectItem value="dark">Work From Home</SelectItem>
                  <SelectItem value="system">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <label className="font-medium">Requirements (Min 1)</label>
              <div className="h-full">
                {requirements.map((requirement, idx) => {
                  return (
                    <div className="flex h-full" key={requirement.idx}>
                      <Input
                        className="mt-2 border-[#b1b1b1]"
                        placeholder="Requirements"
                        onChange={(e) =>
                          handleInputChange(requirement.idx, e.target.value)
                        }
                      />
                      <div className="h-current flex items-center ml-4 mt-2">
                        <div
                          className="justify-center text-white w-[25px] h-[25px] items-center rounded-md bg-[#ff5858] transition text-[20px] flex hover:cursor-pointer hover:bg-[#dd4545]"
                          onClick={() => removeComponent(requirement.idx)}
                        >
                          -
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex justify-center mt-6">
                <div
                  onClick={addInput}
                  className="flex text-[14px] p-2 font-semibold bg-[#4d8fb3] text-white border-0 justify-center items-center rounded-md border-[1px] border-[#b1b1b1] hover:cursor-pointer transition hover:bg-[#357ea4]"
                >
                  + Add Requirement
                </div>
              </div>
            </div>

            <div className="my-4">
              <div className="mb-2">
                <label className="font-medium">Skills</label>
              </div>

              <div className="text-[gray]">
                <div className="font-semibold">Example</div>
                <div className="mb-2">Skill title: Java Programming</div>
                <div className="mt-2 mb-4">
                  Description: Proficient in Java programming with a strong
                  understanding of object-oriented principles, data structures,
                  and algorithms. Capable of developing robust, scalable, and
                  maintainable code for various applications. Familiar with the
                  latest Java versions and features.
                </div>
              </div>

              {skills.map((skill, idx) => {
                return (
                  <div className="my-4" key={skill.idx}>
                    <div className="flex h-[40px] w-full justify-between items-center">
                      <div className="font-medium">Skill</div>
                      <div
                        className="flex justify-center text-white w-[25px] h-[25px] items-center rounded-md bg-[#ff5858] text-[20px] hover:cursor-pointer hover:bg-[#dd4545]"
                        onClick={() => removeSkillComponent(skill.idx)}
                      >
                        -
                      </div>
                    </div>

                    <Input
                      className="mt-2 border-[#b1b1b1]"
                      placeholder="Skill Title"
                    />

                    <Textarea
                      className="mt-4 border-[#b1b1b1]"
                      placeholder="Skill Description"
                    ></Textarea>
                  </div>
                );
              })}

              <div className="w-full flex justify-center mt-6">
                <div
                  onClick={addSkillInput}
                  className="flex text-[14px] font-semibold bg-[#4d8fb3] text-white border-0 justify-center items-center rounded-md p-2 border-[1px] border-[#b1b1b1] transition hover:cursor-pointer hover:bg-[#357ea4]"
                >
                  + Add Skill
                </div>
              </div>
            </div>

            {sections.map((section, idx) => {
              return (
                <div className="my-4" key={section.idx}>
                  <div className="flex h-[40px] w-full justify-between items-center">
                    <div>New Section</div>
                    <div
                      className="justify-center text-white w-[25px] h-[25px] items-center rounded-md bg-[#ff5858] text-[20px] flex hover:cursor-pointer hover:bg-[#dd4545]"
                      onClick={() => removeSectionComponent(section.idx)}
                    >
                      -
                    </div>
                  </div>

                  <Input
                    className="mt-2 border-[#b1b1b1]"
                    placeholder="New Section Title"
                  />

                  <Textarea
                    className="mt-4 border-[#b1b1b1]"
                    placeholder="New Section Description"
                  ></Textarea>
                </div>
              );
            })}

            <div className="text-[gray]">
              <div className="font-semibold">Section Example</div>
              <div className="mb-2">Section title: Benefit</div>
              <div className="mt-2 mb-4">
                Description: You will get Free Parking, Salary, Annual Bonus,
                and Health Assurance
              </div>
            </div>

            <div className="flex justify-center my-10">
              <Button
                className="font-semibold bg-[#4d8fb3] hover:bg-[#357ea4]"
                onClick={addSectionInput}
              >
                + Add New Section
              </Button>
            </div>

            <div className="flex justify-center">
              <Button onClick={handlePublish}>Publish</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NewVacancyPage;
