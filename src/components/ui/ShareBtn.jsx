import {
  EmailShareBtn,
  FBShareBtn,
  LinkedInShareBtn,
  PinterestShareBtn,
  TelegramShareBtn,
  TwitterShareBtn,
  WhatsAppShareBtn,
} from "dv-social-share";
import Modal from "./Modal";
import CopyTextBtn from "./CopyTextBtn";
const ShareBtn = ({className,url}) => {
  return (
    <Modal>
      <Modal.Open opens={"share"}>
        <button className={"transition-colors hover:text-green-900  hover:scale-95 rounded-md font-semibold "+className}>
          share
        </button>
      </Modal.Open>
      <Modal.Window name={"share"}>
        <div className="flex flex-wrap flex-col p-2 sm:p-4 gap-4  xs:min-w-[350px] xs:max-w-[390px] min-w-[78vw]">
          <CopyTextBtn text={url} />
          <div className="flex xs:gap-6 gap-2">
            <FBShareBtn url={url} appId="" />
            <LinkedInShareBtn url={url} appId="" />
            <TwitterShareBtn url={url} appId="" />
            <TelegramShareBtn url={url} appId="" />
            <WhatsAppShareBtn url={url} appId="" />
            <EmailShareBtn url={url} appId="" />
            <PinterestShareBtn url={url} appId="" />
          </div>
        </div>
      </Modal.Window>
    </Modal>
  );
};

export default ShareBtn;
