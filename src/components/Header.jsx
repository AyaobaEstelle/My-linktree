import './Header.css'
export const Header = () => {
  return (
    <header className="profile">
      <button className="profile__action">
        <svg
          className="profile__action-mobile"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="40" height="40" rx="20" fill="none" />
          <path
            d="M21 21.8333C21.4602 21.8333 21.8333 21.4602 21.8333 21C21.8333 20.5398 21.4602 20.1667 21 20.1667C20.5397 20.1667 20.1666 20.5398 20.1666 21C20.1666 21.4602 20.5397 21.8333 21 21.8333Z"
            stroke="#98A2B3"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.8333 21.8333C27.2935 21.8333 27.6666 21.4602 27.6666 21C27.6666 20.5398 27.2935 20.1667 26.8333 20.1667C26.3731 20.1667 26 20.5398 26 21C26 21.4602 26.3731 21.8333 26.8333 21.8333Z"
            stroke="#98A2B3"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.1666 21.8333C15.6269 21.8333 16 21.4602 16 21C16 20.5398 15.6269 20.1667 15.1666 20.1667C14.7064 20.1667 14.3333 20.5398 14.3333 21C14.3333 21.4602 14.7064 21.8333 15.1666 21.8333Z"
            stroke="#98A2B3"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="1"
            y="1"
            width="40"
            height="40"
            rx="20"
            stroke="#D0D5DD"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1 3"
          />
        </svg>

        {/* desktop */}
        <svg
          className="profile__action-desktop"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="40" height="40" rx="20" fill="white" />
          <path
            d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z"
            stroke="#98A2B3"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="1"
            y="1"
            width="40"
            height="40"
            rx="20"
            stroke="#D0D5DD"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1 3"
          />
        </svg>
      </button>

      <div className="profile__media">
        <img className="profile__img" id="profile__img" src="/images/profile.jpg" alt="" />
        <button className="profile__upload">
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 7.37722C1 7.0269 1 6.85174 1.01462 6.70421C1.1556 5.28127 2.28127 4.1556 3.70421 4.01462C3.85174 4 4.03636 4 4.40558 4C4.54785 4 4.61899 4 4.67939 3.99634C5.45061 3.94963 6.12595 3.46288 6.41414 2.746C6.43671 2.68986 6.45781 2.62657 6.5 2.5C6.54219 2.37343 6.56329 2.31014 6.58586 2.254C6.87405 1.53712 7.54939 1.05037 8.32061 1.00366C8.38101 1 8.44772 1 8.58114 1H13.4189C13.5523 1 13.619 1 13.6794 1.00366C14.4506 1.05037 15.126 1.53712 15.4141 2.254C15.4367 2.31014 15.4578 2.37343 15.5 2.5C15.5422 2.62657 15.5633 2.68986 15.5859 2.746C15.874 3.46288 16.5494 3.94963 17.3206 3.99634C17.381 4 17.4521 4 17.5944 4C17.9636 4 18.1483 4 18.2958 4.01462C19.7187 4.1556 20.8444 5.28127 20.9854 6.70421C21 6.85174 21 7.0269 21 7.37722V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H5.8C4.11984 20 3.27976 20 2.63803 19.673C2.07354 19.3854 1.6146 18.9265 1.32698 18.362C1 17.7202 1 16.8802 1 15.2V7.37722Z"
              stroke="#F9FAFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 15.5C13.2091 15.5 15 13.7091 15 11.5C15 9.29086 13.2091 7.5 11 7.5C8.79086 7.5 7 9.29086 7 11.5C7 13.7091 8.79086 15.5 11 15.5Z"
              stroke="#F9FAFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <h3 id="twitter" className="profile__name">
       Qxtaesteller
      </h3>
      <span style={{ display: 'none' }} id="slack">
        Ayaoba
      </span>
    </header>
  )
}
