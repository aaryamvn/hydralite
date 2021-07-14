export const Icon: React.FC<{ viewBox?: string }> = ({ children, viewBox }) => {
  return (
    <svg viewBox={viewBox ?? "0 0 30 30"} fill="none">
      {children}
    </svg>
  );
};
export const IconPath: React.FC<{ d: string }> = ({ d }) => {
  return <path d={d} fill="currentColor" />;
};

export const UseableIcon: React.FC = () => {
  return <div />;
};

export const HomeIcon: typeof UseableIcon = () => {
  return (
    <Icon>
      <IconPath d="M11.3854 1.69396C11.9772 1.19524 12.7261 0.921722 13.5 0.921722C14.2739 0.921722 15.0228 1.19524 15.6146 1.69396L25.4583 9.99917C26.1992 10.6219 26.625 11.5392 26.625 12.5075V26.8021C26.625 27.4789 26.3561 28.1281 25.8775 28.6067C25.3989 29.0853 24.7498 29.3542 24.0729 29.3542H19.6979C19.0211 29.3542 18.3719 29.0853 17.8933 28.6067C17.4147 28.1281 17.1458 27.4789 17.1458 26.8021V19.5104C17.1458 19.2203 17.0306 18.9421 16.8255 18.737C16.6204 18.5319 16.3422 18.4167 16.0521 18.4167H10.9479C10.6578 18.4167 10.3796 18.5319 10.1745 18.737C9.9694 18.9421 9.85417 19.2203 9.85417 19.5104V26.8021C9.85417 27.4789 9.58529 28.1281 9.10668 28.6067C8.62807 29.0853 7.97894 29.3542 7.30208 29.3542H2.92708C2.59194 29.3542 2.26008 29.2882 1.95044 29.1599C1.64081 29.0316 1.35947 28.8437 1.12249 28.6067C0.885505 28.3697 0.69752 28.0884 0.569266 27.7787C0.441012 27.4691 0.375 27.1372 0.375 26.8021V12.506C0.375 11.5392 0.800833 10.6219 1.54167 9.99771L11.3854 1.69396Z" />
    </Icon>
  );
};
export const GroupIcon: typeof UseableIcon = () => {
  return (
    <Icon>
      <IconPath d="M23.75 3.75H6.25C5.58696 3.75 4.95107 4.01339 4.48223 4.48223C4.01339 4.95107 3.75 5.58696 3.75 6.25V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V6.25C26.25 5.58696 25.9866 4.95107 25.5178 4.48223C25.0489 4.01339 24.413 3.75 23.75 3.75ZM7.5 7.5H13.75V13.75H7.5V7.5ZM13.125 23.75C12.2962 23.75 11.5013 23.4208 10.9153 22.8347C10.3292 22.2487 10 21.4538 10 20.625C10 19.7962 10.3292 19.0013 10.9153 18.4153C11.5013 17.8292 12.2962 17.5 13.125 17.5C13.9538 17.5 14.7487 17.8292 15.3347 18.4153C15.9208 19.0013 16.25 19.7962 16.25 20.625C16.25 21.4538 15.9208 22.2487 15.3347 22.8347C14.7487 23.4208 13.9538 23.75 13.125 23.75ZM16.875 16.25L20.625 10L24.375 16.25H16.875Z" />
    </Icon>
  );
};
export const RoadIcon: typeof UseableIcon = () => {
  return (
    <Icon>
      <IconPath d="M29.8536 23.5939L22.5729 4.84395C22.3141 4.17715 21.75 3.75 21.1292 3.75H16.0463L16.174 5.10703C16.2 5.38359 16.0068 5.625 15.7594 5.625H14.2406C13.9932 5.625 13.8 5.38359 13.826 5.10703L13.9536 3.75H8.87083C8.24947 3.75 7.68541 4.17715 7.42655 4.84395L0.145826 23.5939C-0.335944 24.8355 0.432806 26.25 1.59062 26.25H11.8427L12.3797 20.5266C12.4245 20.0496 12.7818 19.6875 13.2083 19.6875H16.7917C17.2182 19.6875 17.5755 20.0496 17.6203 20.5266L18.1573 26.25H28.4094C29.5672 26.25 30.3359 24.8355 29.8536 23.5939ZM13.5625 7.91953C13.5733 7.80433 13.6217 7.69771 13.6982 7.62024C13.7748 7.54277 13.8741 7.49994 13.9771 7.5H16.0234C16.2365 7.5 16.4156 7.68105 16.438 7.91953L16.6776 10.473C16.7167 10.8885 16.4271 11.25 16.0562 11.25H13.9448C13.5734 11.25 13.2844 10.8885 13.3234 10.473L13.5625 7.91953V7.91953ZM16.4396 17.8125H13.5599C13.0651 17.8125 12.6792 17.3303 12.7312 16.7766L12.9953 13.9641C13.0401 13.4871 13.3974 13.125 13.824 13.125H16.1755C16.6021 13.125 16.9594 13.4871 17.0042 13.9641L17.2682 16.7766C17.3203 17.3303 16.9344 17.8125 16.4396 17.8125V17.8125Z" />
    </Icon>
  );
};
export const TaskIcon: typeof UseableIcon = () => {
  return (
    <Icon>
      <IconPath d="M5 16.25H12.5C12.8315 16.25 13.1495 16.1183 13.3839 15.8839C13.6183 15.6495 13.75 15.3315 13.75 15V5C13.75 4.66848 13.6183 4.35054 13.3839 4.11612C13.1495 3.8817 12.8315 3.75 12.5 3.75H5C4.66848 3.75 4.35054 3.8817 4.11612 4.11612C3.8817 4.35054 3.75 4.66848 3.75 5V15C3.75 15.3315 3.8817 15.6495 4.11612 15.8839C4.35054 16.1183 4.66848 16.25 5 16.25ZM3.75 25C3.75 25.3315 3.8817 25.6495 4.11612 25.8839C4.35054 26.1183 4.66848 26.25 5 26.25H12.5C12.8315 26.25 13.1495 26.1183 13.3839 25.8839C13.6183 25.6495 13.75 25.3315 13.75 25V20C13.75 19.6685 13.6183 19.3505 13.3839 19.1161C13.1495 18.8817 12.8315 18.75 12.5 18.75H5C4.66848 18.75 4.35054 18.8817 4.11612 19.1161C3.8817 19.3505 3.75 19.6685 3.75 20V25ZM16.25 25C16.25 25.3315 16.3817 25.6495 16.6161 25.8839C16.8505 26.1183 17.1685 26.25 17.5 26.25H25C25.3315 26.25 25.6495 26.1183 25.8839 25.8839C26.1183 25.6495 26.25 25.3315 26.25 25V16.25C26.25 15.9185 26.1183 15.6005 25.8839 15.3661C25.6495 15.1317 25.3315 15 25 15H17.5C17.1685 15 16.8505 15.1317 16.6161 15.3661C16.3817 15.6005 16.25 15.9185 16.25 16.25V25ZM17.5 12.5H25C25.3315 12.5 25.6495 12.3683 25.8839 12.1339C26.1183 11.8995 26.25 11.5815 26.25 11.25V5C26.25 4.66848 26.1183 4.35054 25.8839 4.11612C25.6495 3.8817 25.3315 3.75 25 3.75H17.5C17.1685 3.75 16.8505 3.8817 16.6161 4.11612C16.3817 4.35054 16.25 4.66848 16.25 5V11.25C16.25 11.5815 16.3817 11.8995 16.6161 12.1339C16.8505 12.3683 17.1685 12.5 17.5 12.5Z" />
    </Icon>
  );
};
export const MeetingIcon: typeof UseableIcon = () => {
  return (
    <Icon>
      <IconPath d="M5.48852 7.419C5.67687 6.59021 6.14116 5.84998 6.80532 5.31963C7.46948 4.78929 8.2941 4.50029 9.14402 4.5H20.8545C21.7047 4.49995 22.5297 4.78879 23.1941 5.31916C23.8586 5.84954 24.3231 6.58996 24.5115 7.419L26.898 17.919C27.0228 18.4681 27.0223 19.0382 26.8966 19.5871C26.7709 20.136 26.5232 20.6495 26.1719 21.0896C25.8206 21.5296 25.3748 21.8849 24.8674 22.1291C24.36 22.3733 23.8041 22.5 23.241 22.5H6.75752C6.19456 22.4998 5.63887 22.3729 5.13167 22.1286C4.62446 21.8843 4.17876 21.529 3.82763 21.089C3.4765 20.6489 3.22894 20.1355 3.10333 19.5867C2.97772 19.038 2.97727 18.468 3.10202 17.919L5.48702 7.419H5.48852Z" />
      <IconPath d="M8.25 24C8.05109 24 7.86032 24.079 7.71967 24.2197C7.57902 24.3603 7.5 24.5511 7.5 24.75C7.5 24.9489 7.57902 25.1397 7.71967 25.2803C7.86032 25.421 8.05109 25.5 8.25 25.5H21.75C21.9489 25.5 22.1397 25.421 22.2803 25.2803C22.421 25.1397 22.5 24.9489 22.5 24.75C22.5 24.5511 22.421 24.3603 22.2803 24.2197C22.1397 24.079 21.9489 24 21.75 24H8.25Z" />
    </Icon>
  );
};
export const OutSourceIcon: typeof UseableIcon = () => {
  return (
    <Icon>
      <IconPath d="M20 1.25C20.3315 1.25 20.6495 1.3817 20.8839 1.61612C21.1183 1.85054 21.25 2.16848 21.25 2.5V3.74875L27.5 3.75V11.25L24.975 11.2487L28.4338 20.7437C28.6682 21.3786 28.7713 22.0545 28.7369 22.7304C28.7024 23.4062 28.5311 24.0681 28.2333 24.6758C27.9355 25.2836 27.5175 25.8245 27.0045 26.2659C26.4915 26.7074 25.8942 27.04 25.2488 27.2438C24.6035 27.4476 23.9234 27.5182 23.25 27.4514C22.5765 27.3846 21.9236 27.1818 21.3308 26.8553C20.738 26.5288 20.2177 26.0853 19.8014 25.5517C19.3851 25.0182 19.0814 24.4056 18.9087 23.7512H13.5925C13.3082 24.8483 12.6597 25.8163 11.7534 26.4967C10.8471 27.1771 9.73666 27.5296 8.60386 27.4965C7.47106 27.4633 6.38307 27.0466 5.51806 26.3144C4.65305 25.5822 4.06228 24.578 3.8425 23.4663C3.43733 23.2551 3.09789 22.9367 2.86117 22.546C2.62445 22.1552 2.49952 21.7069 2.5 21.25V15H13.75C13.75 15.3062 13.8624 15.6017 14.0659 15.8305C14.2693 16.0593 14.5497 16.2054 14.8538 16.2413L15 16.25H17.5C17.8062 16.25 18.1017 16.1376 18.3305 15.9341C18.5593 15.7307 18.7054 15.4503 18.7412 15.1462L18.75 15V3.75H15V1.25H20ZM8.75 20C8.08696 20 7.45108 20.2634 6.98223 20.7322C6.51339 21.2011 6.25 21.837 6.25 22.5C6.25 23.163 6.51339 23.7989 6.98223 24.2678C7.45108 24.7366 8.08696 25 8.75 25C9.41304 25 10.0489 24.7366 10.5178 24.2678C10.9866 23.7989 11.25 23.163 11.25 22.5C11.25 21.837 10.9866 21.2011 10.5178 20.7322C10.0489 20.2634 9.41304 20 8.75 20ZM23.75 20C23.087 20 22.4511 20.2634 21.9822 20.7322C21.5134 21.2011 21.25 21.837 21.25 22.5C21.25 23.163 21.5134 23.7989 21.9822 24.2678C22.4511 24.7366 23.087 25 23.75 25C24.413 25 25.0489 24.7366 25.5178 24.2678C25.9866 23.7989 26.25 23.163 26.25 22.5C26.25 21.837 25.9866 21.2011 25.5178 20.7322C25.0489 20.2634 24.413 20 23.75 20ZM12.5 3.75C12.8315 3.75 13.1495 3.8817 13.3839 4.11612C13.6183 4.35054 13.75 4.66848 13.75 5V13.75H2.5V5C2.5 4.66848 2.6317 4.35054 2.86612 4.11612C3.10054 3.8817 3.41848 3.75 3.75 3.75H12.5ZM25 6.25H21.25V8.75H25V6.25ZM11.25 6.25H5V7.5H11.25V6.25Z" />
    </Icon>
  );
};
export const DevelopIcon: typeof UseableIcon = () => {
  return (
    <Icon>
      <IconPath d="M8.57868 22.125C8.21153 22.1256 7.85702 21.991 7.58268 21.747L-0.00732422 15L8.00418 7.87805C8.3028 7.62259 8.68974 7.49452 9.0818 7.52138C9.47386 7.54825 9.83972 7.7279 10.1007 8.0217C10.3617 8.31551 10.497 8.7 10.4774 9.09249C10.4579 9.48498 10.2851 9.85413 9.99618 10.1205L4.50768 15L9.57468 19.503C9.80232 19.705 9.96314 19.9715 10.0358 20.267C10.1084 20.5626 10.0894 20.8732 9.98137 21.1577C9.8733 21.4422 9.68124 21.6871 9.43071 21.8599C9.18017 22.0327 8.88301 22.1251 8.57868 22.125ZM21.9962 22.122L30.0077 15L22.4177 8.25305C22.1203 7.98889 21.7302 7.85369 21.3331 7.87718C20.9361 7.90067 20.5646 8.08092 20.3004 8.3783C20.0363 8.67567 19.9011 9.0658 19.9246 9.46286C19.948 9.85993 20.1283 10.2314 20.4257 10.4955L25.4927 15L20.0042 19.878C19.7066 20.1422 19.5262 20.5138 19.5025 20.911C19.4789 21.3082 19.614 21.6985 19.8782 21.996C20.1423 22.2936 20.5139 22.4741 20.9111 22.4977C21.3083 22.5213 21.6986 22.3862 21.9962 22.122ZM14.9792 24.2475L17.9792 6.24755C18.0175 6.05083 18.0161 5.84842 17.9749 5.65227C17.9337 5.45612 17.8537 5.27021 17.7394 5.10552C17.6252 4.94084 17.4791 4.80071 17.3098 4.69343C17.1405 4.58615 16.9514 4.51388 16.7538 4.4809C16.5561 4.44792 16.3538 4.45489 16.1588 4.5014C15.9639 4.54791 15.7802 4.63302 15.6187 4.75171C15.4572 4.87039 15.3211 5.02023 15.2185 5.19239C15.1158 5.36455 15.0488 5.55553 15.0212 5.75405L12.0212 23.754C11.9828 23.9508 11.9843 24.1532 12.0254 24.3493C12.0666 24.5455 12.1467 24.7314 12.2609 24.8961C12.3752 25.0608 12.5212 25.2009 12.6905 25.3082C12.8598 25.4154 13.0489 25.4877 13.2466 25.5207C13.4443 25.5537 13.6466 25.5467 13.8415 25.5002C14.0365 25.4537 14.2202 25.3686 14.3817 25.2499C14.5432 25.1312 14.6793 24.9814 14.7819 24.8092C14.8845 24.637 14.9516 24.4461 14.9792 24.2475Z" />
    </Icon>
  );
};
export const InsightsIcon: typeof UseableIcon = () => {
  return (
    <Icon>
      <IconPath d="M24.8333 26.9999H2.13216C1.56708 26.9985 1.02554 26.7735 0.625971 26.3739C0.226403 25.9743 0.00133693 25.4328 0 24.8677L0 19.8938C0.00133693 19.3287 0.226403 18.7872 0.625971 18.3876C1.02554 17.9881 1.56708 17.763 2.13216 17.7617H8.52525V10.6564C8.52813 10.0918 8.7537 9.55119 9.15293 9.15195C9.55216 8.75272 10.0928 8.52716 10.6574 8.52427H17.7812V2.16577C17.7843 1.59222 18.0134 1.04302 18.4189 0.637373C18.8244 0.231723 19.3735 0.00234715 19.9471 -0.000976562H24.8341C25.4077 0.00234508 25.9569 0.231694 26.3625 0.63732C26.7682 1.04295 26.9975 1.59214 27.0008 2.16577V24.8323C26.9975 25.4059 26.7682 25.9551 26.3625 26.3607C25.9569 26.7664 25.4077 26.9957 24.8341 26.999L24.8333 26.9999Z" />
    </Icon>
  );
};
export const MoreIcon: typeof UseableIcon = () => {
  return (
    <Icon>
      <path
        d="M5 16.25C5.69036 16.25 6.25 15.6904 6.25 15C6.25 14.3096 5.69036 13.75 5 13.75C4.30964 13.75 3.75 14.3096 3.75 15C3.75 15.6904 4.30964 16.25 5 16.25Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15 16.25C15.6904 16.25 16.25 15.6904 16.25 15C16.25 14.3096 15.6904 13.75 15 13.75C14.3096 13.75 13.75 14.3096 13.75 15C13.75 15.6904 14.3096 16.25 15 16.25Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M25 16.25C25.6904 16.25 26.25 15.6904 26.25 15C26.25 14.3096 25.6904 13.75 25 13.75C24.3096 13.75 23.75 14.3096 23.75 15C23.75 15.6904 24.3096 16.25 25 16.25Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </Icon>
  );
};

export const HydraIcon: typeof UseableIcon = () => {
  return (
    <Icon>
      <IconPath d="M15 2.573C15 2.573 6.5625 11.8484 6.5625 18.4109C6.5625 23.5882 9.82266 26.8484 15 26.8484C20.1773 26.8484 23.4375 23.5882 23.4375 18.4109C23.4375 11.8484 15 2.573 15 2.573ZM15.9375 23.8015V22.3953C16.8696 22.3942 17.7632 22.0234 18.4222 21.3644C19.0813 20.7053 19.452 19.8117 19.4531 18.8796H20.8594C20.858 20.1846 20.339 21.4357 19.4163 22.3584C18.4935 23.2811 17.2424 23.8001 15.9375 23.8015Z" />
    </Icon>
  );
};
export const SettingsIcon: typeof UseableIcon = () => {
  return (
    <Icon>
      <IconPath d="M15.275 25.5H10.725C10.4399 25.5 10.1634 25.4026 9.94123 25.2239C9.7191 25.0452 9.56474 24.796 9.50373 24.5175L8.99498 22.1625C8.3163 21.8651 7.67277 21.4933 7.07623 21.0538L4.77998 21.785C4.50818 21.8717 4.21491 21.8628 3.94888 21.7598C3.68284 21.6568 3.46004 21.4659 3.31748 21.2188L1.03748 17.28C0.896409 17.0327 0.843456 16.7448 0.88728 16.4634C0.931105 16.1821 1.06911 15.924 1.27873 15.7313L3.05998 14.1063C2.97897 13.3701 2.97897 12.6274 3.05998 11.8912L1.27873 10.27C1.06882 10.0772 0.930621 9.81884 0.886789 9.53723C0.842957 9.25561 0.896089 8.96746 1.03748 8.72L3.31248 4.77875C3.45504 4.53164 3.67784 4.34074 3.94388 4.23773C4.20991 4.13473 4.50318 4.12583 4.77498 4.2125L7.07123 4.94375C7.37623 4.71875 7.69373 4.50875 8.02123 4.31875C8.33748 4.14125 8.66248 3.98 8.99498 3.83625L9.50498 1.48375C9.56569 1.20525 9.71977 0.95586 9.94166 0.776936C10.1636 0.598012 10.4399 0.5003 10.725 0.5H15.275C15.56 0.5003 15.8364 0.598012 16.0583 0.776936C16.2802 0.95586 16.4343 1.20525 16.495 1.48375L17.01 3.8375C17.36 3.9925 17.7025 4.16625 18.0337 4.36C18.3425 4.53875 18.6412 4.735 18.9287 4.94625L21.2262 4.215C21.4979 4.12865 21.7908 4.13771 22.0566 4.2407C22.3224 4.34369 22.545 4.53441 22.6875 4.78125L24.9625 8.7225C25.2525 9.23125 25.1525 9.875 24.7212 10.2713L22.94 11.8962C23.021 12.6324 23.021 13.3751 22.94 14.1112L24.7212 15.7362C25.1525 16.1337 25.2525 16.7763 24.9625 17.285L22.6875 21.2262C22.5449 21.4734 22.3221 21.6643 22.0561 21.7673C21.79 21.8703 21.4968 21.8792 21.225 21.7925L18.9287 21.0612C18.3326 21.5004 17.6895 21.8719 17.0112 22.1687L16.495 24.5175C16.434 24.7958 16.2798 25.0449 16.058 25.2236C15.8361 25.4022 15.5598 25.4998 15.275 25.5ZM12.995 8C11.6689 8 10.3971 8.52678 9.45944 9.46447C8.52176 10.4021 7.99498 11.6739 7.99498 13C7.99498 14.3261 8.52176 15.5979 9.45944 16.5355C10.3971 17.4732 11.6689 18 12.995 18C14.3211 18 15.5928 17.4732 16.5305 16.5355C17.4682 15.5979 17.995 14.3261 17.995 13C17.995 11.6739 17.4682 10.4021 16.5305 9.46447C15.5928 8.52678 14.3211 8 12.995 8Z" />
    </Icon>
  );
};

export const SearchIcon: React.FC = () => {
  return (
    <Icon viewBox="0 0 24 24">
      <IconPath d="M20.71 19.29L17.31 15.9C18.407 14.5025 19.0022 12.7767 19 11C19 9.41775 18.5308 7.87103 17.6518 6.55544C16.7727 5.23985 15.5233 4.21447 14.0615 3.60897C12.5997 3.00347 10.9911 2.84504 9.43928 3.15372C7.88743 3.4624 6.46197 4.22433 5.34315 5.34315C4.22433 6.46197 3.4624 7.88743 3.15372 9.43928C2.84504 10.9911 3.00346 12.5997 3.60896 14.0615C4.21446 15.5233 5.23984 16.7727 6.55544 17.6518C7.87103 18.5308 9.41775 19 11 19C12.7767 19.0022 14.5025 18.407 15.9 17.31L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29ZM5 11C5 9.81332 5.35189 8.65328 6.01118 7.66658C6.67047 6.67989 7.60754 5.91085 8.7039 5.45673C9.80026 5.0026 11.0067 4.88378 12.1705 5.11529C13.3344 5.3468 14.4035 5.91825 15.2426 6.75736C16.0818 7.59648 16.6532 8.66558 16.8847 9.82946C17.1162 10.9933 16.9974 12.1997 16.5433 13.2961C16.0892 14.3925 15.3201 15.3295 14.3334 15.9888C13.3467 16.6481 12.1867 17 11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11Z" />
    </Icon>
  );
};
export const BackIcon: React.FC = () => {
  return (
    <Icon viewBox="0 0 24 24">
      <IconPath d="M19 11H7.14L10.77 6.64003C10.9397 6.43581 11.0214 6.17253 10.997 5.90811C10.9726 5.64368 10.8442 5.39977 10.64 5.23003C10.4358 5.06029 10.1725 4.97863 9.90808 5.00301C9.64365 5.02739 9.39974 5.15581 9.23 5.36003L4.23 11.36C4.19636 11.4078 4.16628 11.4579 4.14 11.51C4.14 11.56 4.14 11.59 4.07 11.64C4.02467 11.7547 4.00094 11.8767 4 12C4.00094 12.1233 4.02467 12.2454 4.07 12.36C4.07 12.41 4.07 12.44 4.14 12.49C4.16628 12.5422 4.19636 12.5923 4.23 12.64L9.23 18.64C9.32402 18.7529 9.44176 18.8437 9.57485 18.9059C9.70793 18.9681 9.85309 19.0003 10 19C10.2337 19.0005 10.4601 18.9191 10.64 18.77C10.7413 18.6861 10.825 18.583 10.8863 18.4666C10.9477 18.3503 10.9855 18.223 10.9975 18.092C11.0096 17.961 10.9957 17.829 10.9567 17.7034C10.9176 17.5777 10.8542 17.4611 10.77 17.36L7.14 13H19C19.2652 13 19.5196 12.8947 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4805 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" />
    </Icon>
  );
};
export const BellIcon: React.FC = () => {
  return (
    <Icon viewBox="0 0 21 21">
      <IconPath d="M16 12.1653V8.4C16 5.02215 13.815 2.17665 10.855 1.3209C10.562 0.546 9.846 0 9 0C8.154 0 7.438 0.546 7.145 1.3209C4.185 2.1777 2 5.02215 2 8.4V12.1653L0.293001 13.9576C0.199958 14.055 0.126171 14.1707 0.0758854 14.2981C0.0256001 14.4255 -0.000189449 14.5621 1.04767e-06 14.7V16.8C1.04767e-06 17.0785 0.105358 17.3455 0.292894 17.5425C0.480431 17.7394 0.734784 17.85 1 17.85H17C17.2652 17.85 17.5196 17.7394 17.7071 17.5425C17.8946 17.3455 18 17.0785 18 16.8V14.7C18.0002 14.5621 17.9744 14.4255 17.9241 14.2981C17.8738 14.1707 17.8 14.055 17.707 13.9576L16 12.1653ZM16 15.75H2V15.1347L3.707 13.3423C3.80004 13.245 3.87383 13.1293 3.92412 13.0019C3.9744 12.8745 4.00019 12.7379 4 12.6V8.4C4 5.50515 6.243 3.15 9 3.15C11.757 3.15 14 5.50515 14 8.4V12.6C14 12.8793 14.105 13.146 14.293 13.3423L16 15.1347V15.75ZM9 21C9.6193 21.0008 10.2235 20.799 10.7285 20.4227C11.2335 20.0463 11.6143 19.5141 11.818 18.9H6.182C6.38566 19.5141 6.76648 20.0463 7.27151 20.4227C7.77654 20.799 8.3807 21.0008 9 21V21Z" />
    </Icon>
  );
};
export const DropdownIcon: React.FC = () => {
  return (
    <Icon viewBox="0 0 12 6">
      <IconPath d="M1.6436 0C0.938331 0 0.5614 0.790625 1.02633 1.29562L4.65182 5.23937C4.75969 5.35669 4.89265 5.45072 5.04181 5.51513C5.19097 5.57955 5.35287 5.61288 5.51666 5.61288C5.68046 5.61288 5.84236 5.57955 5.99152 5.51513C6.14068 5.45072 6.27364 5.35669 6.38151 5.23937L10.0077 1.29562C10.4719 0.790625 10.095 0 9.39039 0H1.64294H1.6436Z" />
    </Icon>
  );
};
export const GotoIcon: React.FC = () => {
  return (
    <Icon viewBox="0 0 40 40">
      <path
        d="M6.66675 20H33.3334"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6667 8.33325L33.3334 19.9999L21.6667 31.6666"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
export const FlagIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.39941 24.7948H29.6557C29.9607 24.7947 30.2594 24.7065 30.5168 24.5404C30.7741 24.3743 30.9795 24.1372 31.1088 23.857C31.2382 23.5768 31.2862 23.2649 31.2472 22.9581C31.2081 22.6512 31.0837 22.3619 30.8885 22.1241L25.0568 15.024L30.8885 7.92387C31.0837 7.68611 31.2081 7.39685 31.2472 7.08996C31.2862 6.78306 31.2382 6.47125 31.1088 6.19102C30.9795 5.91079 30.7741 5.67375 30.5168 5.50766C30.2594 5.34156 29.9607 5.25329 29.6557 5.25317H7.39941V34.5657"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const HornIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      <path
        d="M31.6844 7.61157V10.2619L7.17273 14.7809C6.61181 14.885 6.10549 15.1876 5.74393 15.6349C5.38236 16.0822 5.18902 16.6452 5.19832 17.2236V22.5243C5.18902 23.1027 5.38236 23.6657 5.74393 24.113C6.10549 24.5603 6.61181 24.863 7.17273 24.967L10.014 25.3945V29.5959C10.014 30.2438 10.2676 30.8651 10.7192 31.3232C11.1708 31.7813 11.7832 32.0387 12.4218 32.0387H22.0531C22.6917 32.0387 23.3041 31.7813 23.7557 31.3232C24.2072 30.8651 24.4609 30.2438 24.4609 29.5959V28.057L31.6844 29.3883V32.0387H34.0922V7.61157H31.6844ZM22.0531 29.5959H12.4218V25.8464L22.0531 27.6174V29.5959ZM7.60614 22.4755V17.1748L31.6844 12.7413V26.909L7.60614 22.4755Z"
        fill="white"
      />
    </svg>
  );
};
export const PersonIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3135 17.524C21.2616 17.524 24.4622 14.2756 24.4622 10.2686C24.4622 6.26153 21.2616 3.01318 17.3135 3.01318C13.3654 3.01318 10.1648 6.26153 10.1648 10.2686C10.1648 14.2756 13.3654 17.524 17.3135 17.524Z"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M24.4623 20.426H24.9656C26.0108 20.4263 27.02 20.814 27.8035 21.5162C28.587 22.2184 29.0909 23.1868 29.2205 24.2395L29.7795 28.7726C29.8298 29.181 29.7939 29.5956 29.6743 29.9888C29.5546 30.382 29.354 30.7449 29.0856 31.0534C28.8172 31.3619 28.4872 31.609 28.1175 31.7781C27.7479 31.9473 27.347 32.0347 26.9415 32.0347H7.68578C7.28028 32.0347 6.8794 31.9473 6.50975 31.7781C6.14009 31.609 5.81011 31.3619 5.54171 31.0534C5.27331 30.7449 5.07263 30.382 4.95299 29.9888C4.83334 29.5956 4.79747 29.181 4.84775 28.7726L5.40535 24.2395C5.53502 23.1863 6.03932 22.2175 6.82341 21.5152C7.6075 20.813 8.61737 20.4256 9.66311 20.426H10.1649"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
