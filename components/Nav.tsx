'use client';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import settings from '@/data/settings';
import Link from 'next/link';
import { IoMdLogOut } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';
import profile from '@/data/profile';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdOutlinePayments } from 'react-icons/md';
import { CiFileOn } from 'react-icons/ci';
import { TbReportSearch } from 'react-icons/tb';
import { LuMailbox } from 'react-icons/lu';

import { MdOutlineMedicalServices } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const [dom, setDom] = useState(false);

  const path = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem('lgn')) {
      path.push('/');
    }
  }, []);

  return (
    <nav className="bg-secondary text-white px-6 sm:px-0 py-4 shadow-lg">
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="container items-center mx-auto flex justify-between">
          <div>
            <SheetTrigger className="flex gap-4 items-center">
              <MdMenu className="text-white text-4xl sm:text-2xl cursor-pointer" />

              <h6 className="sm:text-2xl text-[14px]">{settings?.comp_name}</h6>
            </SheetTrigger>
          </div>
          <div>
            <Link href="?logout=1" className="flex gap-1 items-center">
              <IoMdLogOut /> Logout
            </Link>
          </div>
        </div>
        <SheetContent side="left" className="w-[60%] sm:w-[20%]">
          <SheetTitle>
            <div className="bg-secondary/25 p-6">
              <p>Welcome</p>
              <p className="font-extrabold">{profile.fullname}</p>
            </div>
          </SheetTitle>
          <div className="p-6">
            <ul>
              <li className="group  mb-4 ">
                <Link
                  href="/dashboard"
                  className="flex justify-between items-center group-hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex gap-2 items-center">
                    <FiUsers /> Accounts
                  </div>
                  <MdKeyboardArrowRight className="text-2xl" />
                </Link>
              </li>

              <li className="group  mb-4 ">
                <Link
                  href="/dashboard"
                  className="flex justify-between items-center group-hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex gap-2 items-center">
                    <MdOutlinePayments /> Payments
                  </div>
                  <MdKeyboardArrowRight className="text-2xl" />
                </Link>
              </li>

              <li className="group  mb-4 ">
                <Link
                  href="/dashboard"
                  className="flex justify-between items-center group-hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex gap-2 items-center">
                    <CiFileOn /> File Upload
                  </div>
                  <MdKeyboardArrowRight className="text-2xl" />
                </Link>
              </li>

              <li className="group  mb-4 ">
                <Link
                  href="/dashboard"
                  className="flex justify-between items-center group-hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex gap-2 items-center">
                    <TbReportSearch /> Records
                  </div>
                  <MdKeyboardArrowRight className="text-2xl" />
                </Link>
              </li>

              <li className="group  mb-4 ">
                <Link
                  href="/dashboard"
                  className="flex justify-between items-center group-hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex gap-2 items-center">
                    <LuMailbox /> Mailbox
                  </div>
                  <MdKeyboardArrowRight className="text-2xl" />
                </Link>
              </li>

              <li className="group  mb-4 ">
                <Link
                  href="/dashboard"
                  className="flex justify-between items-center group-hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex gap-2 items-center">
                    <FaRegUser /> My Profile
                  </div>
                  <MdKeyboardArrowRight className="text-2xl" />
                </Link>
              </li>

              <li className="group  mb-4 ">
                <Link
                  href="/dashboard"
                  className="flex justify-between items-center group-hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex gap-2 items-center">
                    <MdOutlineMedicalServices /> More Services
                  </div>
                  <MdKeyboardArrowRight className="text-2xl" />
                </Link>
              </li>

              <li>FAQ</li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Nav;
