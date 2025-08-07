"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+228 93737007",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "yourmail@example.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lomé, Togo",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[70%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] border border-gray-700 rounded-xl">
              <h3 className="text-4xl text-slate-100">Let's work together</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, conseca maxime aperiam
                consequuntur, obcaecati assumenda aliquid. Fugit, harum, error
                culpa exercitationem temporibus qia ipsam, atque sunt?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  className="bg-black/70 text-slate-100 placeholder:text-gray-400 border border-gray-700"
                />
                <Input
                  type="lastname"
                  placeholder="Lastname"
                  className="bg-black/70 text-slate-100 placeholder:text-gray-400 border border-gray-700"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-black/70 text-slate-100 placeholder:text-gray-400 border border-gray-700"
                />
                <Input
                  type="phone"
                  placeholder="Phone number"
                  className="bg-black/70 text-slate-100 placeholder:text-gray-400 border border-gray-700"
                />
              </div>

              <Select>
                <SelectTrigger
                   class="border border-gray-600 focus:border-blue-600 focus:outline-none rounded-lg px-4 py-2 w-full"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent className="bg-black/90 border border-gray-700 text-slate-100">
                  <SelectGroup>
                    <SelectLabel className="text-gray-400">
                      Select a service
                    </SelectLabel>
                    <SelectItem value="web">Web Dev</SelectItem>
                    <SelectItem value="web ui">Web UI</SelectItem>
                    <SelectItem value="web dev">Web Logo</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>



              <Textarea
                className="h-[200px] bg-black/70 text-slate-100 placeholder:text-gray-400 border border-gray-700"
                placeholder="Type your message here"
              />

              <Button
                size="md"
                className="max-w-40 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Send message
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-blue-600 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400">{item.title}</p>
                      <p className="text-xl text-slate-100">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
