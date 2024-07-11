import React, { useState } from "react";

interface MailListProps {
  isDeleteMode: boolean;
  mailData: {
    id: number;
    sourceId: number;
    from: string;
    sourceName: string;
    title: string;
    content: string;
    isRead: boolean;
    createdAt: string;
  }[];
  isOpen: boolean;
  handleOpen: (letterId: number) => void;
  handleClose: () => void;
}

const MailList: React.FC<MailListProps> = ({
  isDeleteMode,
  mailData,
  isOpen,
  handleOpen,
  handleClose,
}) => {
  const [selectedMail, setSelectedMail] = useState(null);

  const handleMailClick = (mail: any) => {
    setSelectedMail(mail);
    handleOpen(mail.id);
  };

  return (
    <div>
      {mailData.map((mail) => (
        <div
          key={mail.id}
          className="flex flex-col py-5 border-b-[#EBEBEB] border-b-[1px] first:pt-0 last:border-b-0 last:pb-0"
        >
          <div className="flex flex-row justify-between mb-1">
            <div className="text-sm font-medium text-black-700">
              {mail.title}
            </div>
            <div className="text-xs font-normal text-black-400">
              {mail.createdAt}
            </div>
          </div>

          <div className="text-xs font-normal text-black-400">{mail.from}</div>
        </div>
      ))}
    </div>
  );
};

export default MailList;
