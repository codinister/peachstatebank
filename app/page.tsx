'use client';

import LoginForm from '@/components/LoginForm';
import { Button } from '@/components/ui/button';
import settings from '@/data/settings';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (sessionStorage.getItem('lgn')) {
      sessionStorage.removeItem('lgn');
    }
  }, []);

  return (
    <div>
      <nav className="shadow-lg">
        <div className="container px-6 sm:px-0 py-6 flex justify-between mx-auto">
          <div>
            <h6>{settings.comp_name}</h6>
          </div>
          <div>English</div>
        </div>
      </nav>

      <div className="bg-secondary">
        <div className="container mx-auto py-10  flex gap-10 flex-col sm:flex-row px-6 sm:px-0">
          <div className=" flex-2 text-white flex items-center">
            <div>
              <span>Enjoy</span>
              <h1 className="font-bold text-8xl">$400</h1>
            </div>
          </div>
          <div className="flex-4 text-white flex items-center">
            <div>
              <h5>New {settings?.comp_name} customers</h5>
              <p className="my-6">
                Open a {settings.comp_name} Total Checking account with
                qualifying activities
              </p>

              <Button>Open an account</Button>
            </div>
          </div>
          <div className="flex-3 bg-white">
            <LoginForm />
          </div>
        </div>
      </div>

      <div className="bg-white py-10 p-6">
        <div className="container gap-10 flex-col sm:flex-row flex mx-auto  ">
          <div
            className="h-70 p-30 sm:p-0 rounded-2xl flex-1"
            style={{
              backgroundImage: `url('/account.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          ></div>
          <div className="flex-1">
            <h5>Keep your business moving forward with {settings.comp_name}</h5>
            <p className="py-6">
              Open a new {settings.comp_name} Business Complete Checking account
              with qualifying activities. For new business checking customers
              only.
            </p>
            <Button>Open Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
