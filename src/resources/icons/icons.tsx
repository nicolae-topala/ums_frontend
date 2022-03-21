import React from 'react';

interface Props {
  type: string;
  className?: string;
  onClick?: () => void;
}

const iconColors = {
  dark: '#444444',
};

export const Icon: React.FC<Props> = ({ type, className, onClick }) => {
  switch (type) {
    case 'logOut':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 64 64"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <path
            d="M22 48h16V4H2v43l20 14V19L2 4"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            stroke="#202020"
            fill="none"
            data-name="layer2"
            strokeLinejoin="round"
          ></path>
          <path
            d="M32 26h29M51 16l10 10-10 10"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            stroke="#202020"
            fill="none"
            data-name="layer1"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case 'question':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <circle
            data-name="layer2"
            cx="32"
            cy="32"
            r="30"
            fill="none"
            stroke="#487edb"
            strokeMiterlimit="10"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></circle>
          <path
            data-name="layer1"
            d="M24 24.528C24 21.647 26.206 17 32.47 17S40 22.628 40 24.528s-.59 4.092-4.057 7.558C32.477 35.552 32 37.353 32 39v2"
            fill="none"
            stroke="#487edb"
            strokeMiterlimit="10"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
          <circle
            data-name="layer1"
            cx="32"
            cy="47"
            r="2"
            fill="none"
            stroke="#487edb"
            strokeMiterlimit="10"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></circle>
        </svg>
      );
    case 'password':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <path
            data-name="layer2"
            d="M32 14.5C14.8 14.5 2.5 32 2.5 32S14.8 49.5 32 49.5 61.5 32 61.5 32 49.2 14.5 32 14.5z"
            fill="none"
            stroke="#202020"
            strokeMiterlimit="10"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
          <circle
            data-name="layer1"
            cx="32"
            cy="31.5"
            r="12"
            fill="none"
            stroke="#202020"
            strokeMiterlimit="10"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></circle>
        </svg>
      );
    case 'noPassword':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <path
            data-name="layer2"
            d="M25.9 49.3a26.4 26.4 0 0 0 6.1.7c17.2 0 29.5-17.5 29.5-17.5a51.8 51.8 0 0 0-9.5-9.7m-6.5-4.3A29.1 29.1 0 0 0 32 15C14.8 15 2.5 32.5 2.5 32.5a50.9 50.9 0 0 0 15.4 13.6M32 44a12 12 0 0 0 12-12m-3.5-8.5a12 12 0 0 0-17 17"
            fill="none"
            stroke="#202020"
            strokeMiterlimit="10"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
          <path
            data-name="layer1"
            fill="none"
            stroke="#202020"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M62 2L2 62"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      );
    case 'phone':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <path d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"></path>
        </svg>
      );
    case 'email':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
        </svg>
      );
    case 'address':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <path d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM8.86765 18.8965H5.82333V9.73759H8.86765V18.8965ZM7.34558 8.48694H7.32574C6.30417 8.48694 5.64346 7.7837 5.64346 6.90479C5.64346 6.00605 6.32439 5.32227 7.3658 5.32227C8.40721 5.32227 9.04808 6.00605 9.06792 6.90479C9.06792 7.7837 8.40721 8.48694 7.34558 8.48694ZM19.8448 18.8965H16.8009V13.9967C16.8009 12.7653 16.3601 11.9255 15.2586 11.9255C14.4176 11.9255 13.9168 12.492 13.6967 13.0388C13.6162 13.2345 13.5965 13.508 13.5965 13.7817V18.8965H10.5524C10.5524 18.8965 10.5923 10.5968 10.5524 9.73759H13.5965V11.0344C14.0011 10.4103 14.7249 9.52263 16.3401 9.52263C18.343 9.52263 19.8448 10.8316 19.8448 13.6448V18.8965Z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg
          width="30"
          height="25"
          viewBox="0 0 30 25"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <path d="M30 2.95962C28.8844 3.46154 27.6956 3.79423 26.4562 3.95577C27.7312 3.175 28.7044 1.94808 29.1619 0.469231C27.9731 1.19615 26.6606 1.70962 25.2619 1.99615C24.1331 0.763462 22.5244 0 20.7694 0C17.3644 0 14.6231 2.83462 14.6231 6.30962C14.6231 6.80962 14.6644 7.29038 14.7656 7.74808C9.6525 7.49231 5.12813 4.97885 2.08875 1.15C1.55812 2.09423 1.24688 3.175 1.24688 4.33846C1.24688 6.52308 2.34375 8.45961 3.97875 9.58077C2.99062 9.56154 2.02125 9.26731 1.2 8.80385C1.2 8.82308 1.2 8.84808 1.2 8.87308C1.2 11.9385 3.33187 14.4846 6.1275 15.0712C5.62687 15.2115 5.08125 15.2788 4.515 15.2788C4.12125 15.2788 3.72375 15.2558 3.35062 15.1712C4.1475 17.6692 6.40875 19.5058 9.0975 19.5654C7.005 21.2442 4.34812 22.2558 1.47188 22.2558C0.9675 22.2558 0.48375 22.2327 0 22.1692C2.72438 23.9712 5.95312 25 9.435 25C20.7525 25 26.94 15.3846 26.94 7.05C26.94 6.77115 26.9306 6.50192 26.9175 6.23462C28.1381 5.34615 29.1637 4.23654 30 2.95962Z" />
        </svg>
      );

    case 'facebook':
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <path d="M25 12.5C25 5.5957 19.4043 0 12.5 0C5.5957 0 0 5.5957 0 12.5C0 19.4043 5.5957 25 12.5 25C12.5732 25 12.6465 25 12.7197 24.9951V15.2686H10.0342V12.1387H12.7197V9.83398C12.7197 7.16309 14.3506 5.70801 16.7334 5.70801C17.876 5.70801 18.8574 5.79102 19.1406 5.83008V8.62305H17.5C16.2061 8.62305 15.9521 9.23828 15.9521 10.1416V12.1338H19.0527L18.6475 15.2637H15.9521V24.5166C21.1768 23.0176 25 18.208 25 12.5Z" />
        </svg>
      );

    case 'instagram':
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <path d="M14.8926 12.5C14.8926 13.8214 13.8214 14.8926 12.5 14.8926C11.1786 14.8926 10.1074 13.8214 10.1074 12.5C10.1074 11.1786 11.1786 10.1074 12.5 10.1074C13.8214 10.1074 14.8926 11.1786 14.8926 12.5Z" />
          <path d="M18.0952 8.26682C17.9802 7.95516 17.7967 7.67307 17.5583 7.44151C17.3267 7.20309 17.0448 7.01961 16.733 6.90459C16.48 6.80637 16.1001 6.68945 15.4003 6.65759C14.6433 6.62307 14.4163 6.61563 12.4998 6.61563C10.5831 6.61563 10.3561 6.62288 9.59928 6.6574C8.89948 6.68945 8.51934 6.80637 8.26662 6.90459C7.95477 7.01961 7.67267 7.20309 7.44131 7.44151C7.20289 7.67307 7.0194 7.95497 6.9042 8.26682C6.80597 8.51974 6.68905 8.89987 6.6572 9.59968C6.62267 10.3565 6.61523 10.5835 6.61523 12.5002C6.61523 14.4167 6.62267 14.6437 6.6572 15.4007C6.68905 16.1005 6.80597 16.4804 6.9042 16.7334C7.0194 17.0452 7.2027 17.3271 7.44112 17.5587C7.67267 17.7971 7.95457 17.9806 8.26643 18.0956C8.51934 18.194 8.89948 18.3109 9.59928 18.3428C10.3561 18.3773 10.5829 18.3845 12.4996 18.3845C14.4165 18.3845 14.6435 18.3773 15.4001 18.3428C16.0999 18.3109 16.48 18.194 16.733 18.0956C17.3589 17.8541 17.8537 17.3593 18.0952 16.7334C18.1934 16.4804 18.3103 16.1005 18.3424 15.4007C18.3769 14.6437 18.3841 14.4167 18.3841 12.5002C18.3841 10.5835 18.3769 10.3565 18.3424 9.59968C18.3105 8.89987 18.1936 8.51974 18.0952 8.26682ZM12.4998 16.1858C10.4641 16.1858 8.81384 14.5357 8.81384 12.5C8.81384 10.4643 10.4641 8.81423 12.4998 8.81423C14.5353 8.81423 16.1855 10.4643 16.1855 12.5C16.1855 14.5357 14.5353 16.1858 12.4998 16.1858ZM16.3313 9.52987C15.8556 9.52987 15.4699 9.1442 15.4699 8.66851C15.4699 8.19282 15.8556 7.80715 16.3313 7.80715C16.807 7.80715 17.1926 8.19282 17.1926 8.66851C17.1924 9.1442 16.807 9.52987 16.3313 9.52987Z" />
          <path d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM19.6344 15.4593C19.5997 16.2233 19.4782 16.745 19.3008 17.2016C18.928 18.1658 18.1658 18.928 17.2016 19.3008C16.7452 19.4782 16.2233 19.5995 15.4594 19.6344C14.694 19.6693 14.4495 19.6777 12.5002 19.6777C10.5507 19.6777 10.3064 19.6693 9.54075 19.6344C8.77686 19.5995 8.255 19.4782 7.79858 19.3008C7.31945 19.1206 6.88572 18.8381 6.52714 18.4729C6.16207 18.1145 5.87959 17.6805 5.69935 17.2016C5.52197 16.7452 5.40047 16.2233 5.36575 15.4594C5.33047 14.6938 5.32227 14.4493 5.32227 12.5C5.32227 10.5507 5.33047 10.3062 5.36556 9.54075C5.40028 8.77666 5.52158 8.255 5.69897 7.79839C5.87921 7.31945 6.16188 6.88553 6.52714 6.52714C6.88553 6.16188 7.31945 5.8794 7.79839 5.69916C8.255 5.52177 8.77666 5.40047 9.54075 5.36556C10.3062 5.33066 10.5507 5.32227 12.5 5.32227C14.4493 5.32227 14.6938 5.33066 15.4593 5.36575C16.2233 5.40047 16.745 5.52177 17.2016 5.69897C17.6805 5.87921 18.1145 6.16188 18.4731 6.52714C18.8381 6.88572 19.1208 7.31945 19.3008 7.79839C19.4784 8.255 19.5997 8.77666 19.6346 9.54075C19.6695 10.3062 19.6777 10.5507 19.6777 12.5C19.6777 14.4493 19.6695 14.6938 19.6344 15.4593Z" />
          <linearGradient id="instagram-gradient" x1="1" y1="1">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </svg>
      );

    case 'github':
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          className={className}
          onClick={onClick}
          fill={iconColors.dark}
        >
          <g clipPath="url(#clip0)">
            <path d="M12.5 0.520844C5.59375 0.520844 0 6.02084 0 12.8042C0 18.2323 3.58125 22.8354 8.54688 24.4583C9.17188 24.574 9.40104 24.1938 9.40104 23.8677C9.40104 23.5761 9.39062 22.8031 9.38542 21.7792C5.90833 22.5198 5.175 20.1313 5.175 20.1313C4.60625 18.7136 3.78437 18.3344 3.78437 18.3344C2.65208 17.5729 3.87187 17.5886 3.87187 17.5886C5.12708 17.674 5.78646 18.8542 5.78646 18.8542C6.90104 20.7323 8.7125 20.1896 9.42708 19.8761C9.53958 19.0813 9.86146 18.5406 10.2188 18.2333C7.44271 17.9261 4.525 16.8698 4.525 12.1636C4.525 10.8229 5.00937 9.72709 5.81146 8.86772C5.67083 8.5573 5.24896 7.30834 5.92083 5.61668C5.92083 5.61668 6.96771 5.28751 9.35833 6.87605C10.3583 6.60314 11.4208 6.46772 12.4833 6.46147C13.5458 6.46772 14.6083 6.60314 15.6083 6.87605C17.9833 5.28751 19.0302 5.61668 19.0302 5.61668C19.7021 7.30834 19.2802 8.5573 19.1552 8.86772C19.9521 9.72709 20.4365 10.8229 20.4365 12.1636C20.4365 16.8823 17.5146 17.9208 14.7333 18.2229C15.1708 18.5917 15.5771 19.3448 15.5771 20.4958C15.5771 22.1396 15.5615 23.4604 15.5615 23.8594C15.5615 24.1813 15.7802 24.5656 16.4208 24.4427C21.4219 22.8302 25 18.224 25 12.8042C25 6.02084 19.4031 0.520844 12.5 0.520844Z" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'small-facebook':
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 14 14"
          className={className}
          onClick={onClick}
        >
          <path
            d="M14 7C14 3.13359 10.8664 0 7 0C3.13359 0 0 3.13359 0 7C0 10.8664 3.13359 14 7 14C7.04102 14 7.08203 14 7.12305 13.9973V8.55039H5.61914V6.79766H7.12305V5.50703C7.12305 4.01133 8.03633 3.19648 9.3707 3.19648C10.0105 3.19648 10.5602 3.24297 10.7188 3.26484V4.82891H9.8C9.07539 4.82891 8.9332 5.17344 8.9332 5.6793V6.79492H10.6695L10.4426 8.54766H8.9332V13.7293C11.859 12.8898 14 10.1965 14 7Z"
            fill="#3279EA"
          />
        </svg>
      );
    case 'small-twitter':
      return (
        <svg
          width="20"
          height="17"
          viewBox="0 0 17 15"
          className={className}
          onClick={onClick}
        >
          <path
            d="M17 1.67712C16.3678 1.96154 15.6942 2.15006 14.9919 2.2416C15.7144 1.79917 16.2658 1.10391 16.5251 0.265897C15.8514 0.67782 15.1077 0.968782 14.3151 1.13115C13.6754 0.432628 12.7638 0 11.7693 0C9.83981 0 8.28644 1.60628 8.28644 3.57545C8.28644 3.85878 8.30981 4.13122 8.36719 4.39058C5.46975 4.24564 2.90594 2.82135 1.18362 0.651667C0.882937 1.18673 0.706563 1.79917 0.706563 2.45846C0.706563 3.69641 1.32812 4.79378 2.25463 5.4291C1.69469 5.41821 1.14538 5.25147 0.68 4.98885C0.68 4.99974 0.68 5.01391 0.68 5.02808C0.68 6.76513 1.88806 8.20795 3.47225 8.54032C3.18856 8.61987 2.87937 8.65801 2.5585 8.65801C2.33538 8.65801 2.11012 8.64494 1.89869 8.59699C2.35025 10.0126 3.63163 11.0533 5.15525 11.0871C3.9695 12.0384 2.46394 12.6116 0.834063 12.6116C0.54825 12.6116 0.274125 12.5985 0 12.5626C1.54381 13.5837 3.37344 14.1667 5.3465 14.1667C11.7597 14.1667 15.266 8.71795 15.266 3.995C15.266 3.83699 15.2607 3.68442 15.2533 3.53295C15.9449 3.02949 16.5261 2.40071 17 1.67712Z"
            fill="#4494D7"
          />
        </svg>
      );
    case 'copy':
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 14 14"
          className={className}
          onClick={onClick}
          fill="none"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M5.80384 10.6707L4.15416 12.3204C3.47023 13.0043 2.36266 13.0043 1.67931 12.3205C0.995824 11.6371 0.995824 10.5294 1.67918 9.84603L4.97912 6.54608C5.66247 5.86271 6.77015 5.86271 7.4535 6.54608C7.6813 6.77389 8.05066 6.77389 8.27847 6.54608C8.50627 6.31828 8.50627 5.94892 8.27847 5.72112C7.13948 4.58214 5.29314 4.58214 4.15416 5.72112L0.854237 9.02104C-0.284746 10.16 -0.284746 12.0064 0.854237 13.1453C1.99308 14.2849 3.83956 14.2849 4.97915 13.1453L6.62883 11.4957C6.85664 11.2679 6.85664 10.8985 6.62883 10.6707C6.40103 10.4429 6.03164 10.4429 5.80384 10.6707Z"
              fill="#444444"
            />
            <path
              d="M13.1454 0.854237C12.0064 -0.284746 10.1595 -0.284746 9.02047 0.854237L7.04121 2.8335C6.81341 3.0613 6.81341 3.43066 7.04121 3.65847C7.26901 3.88627 7.63838 3.88627 7.86618 3.65847L9.84544 1.6792C10.5288 0.995824 11.637 0.995824 12.3204 1.6792C13.0038 2.36256 13.0038 3.47023 12.3204 4.15358L8.6909 7.78313C8.00752 8.46651 6.89987 8.46651 6.21652 7.78313C5.98872 7.55533 5.61936 7.55533 5.39155 7.78313C5.16375 8.01093 5.16375 8.38029 5.39155 8.6081C6.53054 9.74708 8.37688 9.74708 9.51586 8.6081L13.1454 4.97857C14.2844 3.83959 14.2844 1.99322 13.1454 0.854237Z"
              fill="#444444"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'like':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className={className}
          onClick={onClick}
        >
          <g clipPath="url(#clip0)">
            <path d="M2.08332 8.75C0.935 8.75 0 9.685 0 10.8333V17.5C0 18.6483 0.935 19.5833 2.08332 19.5833H4.58332C5.0525 19.5833 5.48414 19.425 5.83332 19.1616V8.75H2.08332Z" />
            <path d="M19.9998 11.875C19.9998 11.3742 19.8015 10.9075 19.4573 10.5633C19.8465 10.1375 20.0448 9.56665 19.9906 8.97251C19.8931 7.91333 18.939 7.08333 17.8173 7.08333H12.6698C12.9248 6.30915 13.3331 4.89001 13.3331 3.75001C13.3331 1.94251 11.7973 0.416687 10.8331 0.416687C9.96732 0.416687 9.34896 0.904187 9.32232 0.924187C9.224 1.00337 9.1665 1.12337 9.1665 1.25001V4.07583L6.7665 9.27501L6.6665 9.32583V18.2575C7.34482 18.5775 8.20314 18.75 8.74982 18.75H16.399C17.3065 18.75 18.1007 18.1383 18.2873 17.2942C18.3831 16.86 18.3273 16.4225 18.1365 16.0425C18.7523 15.7325 19.1665 15.0983 19.1665 14.375C19.1665 14.08 19.099 13.7975 18.9707 13.5417C19.5865 13.2317 19.9998 12.5975 19.9998 11.875Z" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'small-like':
      return (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          className={className}
          onClick={onClick}
        >
          <g clipPath="url(#clip0)">
            <path
              d="M1.56249 6.5625C0.70125 6.5625 0 7.26375 0 8.12499V13.125C0 13.9862 0.70125 14.6875 1.56249 14.6875H3.43749C3.78937 14.6875 4.11311 14.5687 4.37499 14.3712V6.5625H1.56249Z"
              fill="#444444"
            />
            <path
              d="M15 8.90624C15 8.53063 14.8512 8.18062 14.5931 7.92248C14.885 7.60312 15.0337 7.17497 14.9931 6.72937C14.92 5.93498 14.2043 5.31248 13.3631 5.31248H9.50249C9.69374 4.73185 9.99998 3.66749 9.99998 2.81249C9.99998 1.45687 8.84811 0.3125 8.12498 0.3125C7.47561 0.3125 7.01185 0.678125 6.99186 0.693125C6.91812 0.75251 6.875 0.84251 6.875 0.93749V3.05686L5.075 6.95624L5 6.99436V13.6931C5.50874 13.9331 6.15248 14.0625 6.56249 14.0625H12.2994C12.98 14.0625 13.5756 13.6037 13.7156 12.9706C13.7875 12.645 13.7456 12.3169 13.6025 12.0319C14.0644 11.7994 14.375 11.3237 14.375 10.7812C14.375 10.56 14.3244 10.3481 14.2281 10.1563C14.69 9.92375 15 9.44812 15 8.90624Z"
              fill="#444444"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="15" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="#4868DB"></svg>
      );
  }
};
