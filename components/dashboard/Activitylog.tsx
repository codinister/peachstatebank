'use client';

const Activitylog = () => {
  return (
    <div className="border-2 border-muted/30 p-4">
      <p className="font-bold">Activity Log</p>
      <div className="flex mt-4 gap-2 flex-col sm:flex-row">
        <div className="flex-1">
          <ul className="border-t-2 border-t-primary">
            <li className="f p-1">Accounts (0)</li>
            <li className="flex justify-between">
              <span>Processed</span>
              <span>0</span>
            </li>
            <li className="flex justify-between">
              <span>In Progress</span>
              <span>0</span>
            </li>
            <li className="flex justify-between">
              <span>Rejected</span>
              <span>0</span>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <ul className="border-t-2 border-t-secondary/30">
            <li className="f p-1">Payments (1)</li>
            <li className="flex justify-between">
              <span>Processed</span>
              <span>1</span>
            </li>
            <li className="flex justify-between">
              <span>In Progress</span>
              <span>0</span>
            </li>
            <li className="flex justify-between">
              <span>Rejected</span>
              <span>0</span>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <ul className="border-t-2 border-t-secondary">
            <li className="f p-1">Bulk File (0)</li>
            <li className="flex justify-between">
              <span>Processed</span>
              <span>0</span>
            </li>
            <li className="flex justify-between">
              <span>In Progress</span>
              <span>0</span>
            </li>
            <li className="flex justify-between">
              <span>Rejected</span>
              <span>0</span>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <ul className="border-t-2 border-t-primary">
            <li className="f p-1">Bulk Record (0)</li>
            <li className="flex justify-between">
              <span>Processed</span>
              <span>0</span>
            </li>
            <li className="flex justify-between">
              <span>In Progress</span>
              <span>0</span>
            </li>
            <li className="flex justify-between">
              <span>Rejected</span>
              <span>0</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activitylog;
