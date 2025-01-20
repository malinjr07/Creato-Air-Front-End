import { tSvgIconProp } from '@/utils/types/propTypes';
import React, { FC } from 'react';

const Bed: FC<tSvgIconProp> = ({ fillColor = 'white' }) => {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.25 7.81406C18.7772 7.60651 18.2664 7.49955 17.75 7.5H4.25C3.73368 7.4995 3.22288 7.60629 2.75 7.81359C2.08166 8.10587 1.51294 8.58652 1.11336 9.1968C0.713775 9.80708 0.500639 10.5205 0.5 11.25V16.5C0.5 16.6989 0.579018 16.8897 0.71967 17.0303C0.860322 17.171 1.05109 17.25 1.25 17.25C1.44891 17.25 1.63968 17.171 1.78033 17.0303C1.92098 16.8897 2 16.6989 2 16.5V16.125C2.00122 16.0259 2.04112 15.9312 2.11118 15.8612C2.18124 15.7911 2.27592 15.7512 2.375 15.75H19.625C19.7241 15.7512 19.8188 15.7911 19.8888 15.8612C19.9589 15.9312 19.9988 16.0259 20 16.125V16.5C20 16.6989 20.079 16.8897 20.2197 17.0303C20.3603 17.171 20.5511 17.25 20.75 17.25C20.9489 17.25 21.1397 17.171 21.2803 17.0303C21.421 16.8897 21.5 16.6989 21.5 16.5V11.25C21.4993 10.5206 21.2861 9.80726 20.8865 9.19707C20.4869 8.58688 19.9183 8.1063 19.25 7.81406ZM16.625 0.75H5.375C4.67881 0.75 4.01113 1.02656 3.51884 1.51884C3.02656 2.01113 2.75 2.67881 2.75 3.375V6.75C2.75002 6.77906 2.75679 6.80771 2.76979 6.8337C2.78278 6.85969 2.80163 6.8823 2.82486 6.89976C2.84809 6.91721 2.87505 6.92903 2.90363 6.93428C2.93221 6.93953 2.96162 6.93806 2.98953 6.93C3.39896 6.81025 3.82341 6.74964 4.25 6.75H4.44828C4.49456 6.75029 4.53932 6.73346 4.57393 6.70274C4.60855 6.67202 4.63058 6.62958 4.63578 6.58359C4.67669 6.21712 4.85115 5.87856 5.12586 5.63256C5.40056 5.38656 5.75625 5.25037 6.125 5.25H8.75C9.11899 5.25003 9.47503 5.38606 9.75002 5.63209C10.025 5.87812 10.1997 6.21688 10.2406 6.58359C10.2458 6.62958 10.2679 6.67202 10.3025 6.70274C10.3371 6.73346 10.3818 6.75029 10.4281 6.75H11.5747C11.621 6.75029 11.6657 6.73346 11.7003 6.70274C11.735 6.67202 11.757 6.62958 11.7622 6.58359C11.8031 6.21736 11.9773 5.87899 12.2517 5.63303C12.5261 5.38706 12.8815 5.25072 13.25 5.25H15.875C16.244 5.25003 16.6 5.38606 16.875 5.63209C17.15 5.87812 17.3247 6.21688 17.3656 6.58359C17.3708 6.62958 17.3929 6.67202 17.4275 6.70274C17.4621 6.73346 17.5068 6.75029 17.5531 6.75H17.75C18.1766 6.74979 18.6011 6.81057 19.0105 6.93047C19.0384 6.93854 19.0679 6.94 19.0965 6.93473C19.1251 6.92945 19.1521 6.91759 19.1753 6.90009C19.1986 6.88258 19.2174 6.8599 19.2304 6.83385C19.2433 6.8078 19.2501 6.7791 19.25 6.75V3.375C19.25 2.67881 18.9734 2.01113 18.4812 1.51884C17.9889 1.02656 17.3212 0.75 16.625 0.75Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default Bed;