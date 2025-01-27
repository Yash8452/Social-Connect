import * as Icons from "@heroicons/react/24/outline";
import senderImg from "../../../assets/images/Profile_IMG.jpg";

const ChatHeader = () => {
  return (
    <header className="flex justify-between items-center bg-purple-600 shadow py-4 px-3 text-white">
      <div className="flex items-center gap-4">
        <Icons.ChevronLeftIcon className="h-8 cursor-pointer" />
        <div className="flex items-center gap-2">
          <img
            src={senderImg}
            alt="user"
            className="rounded-full h-12 lg:h-14"
          />
          <h1 className="text-2xl font-semibold">Sender name</h1>
        </div>
      </div>
      <Icons.MagnifyingGlassIcon className="h-8" />
    </header>
  );
};

export default ChatHeader;
