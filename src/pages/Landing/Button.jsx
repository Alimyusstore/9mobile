import React from 'react'

const Button = ({ bnText }) => {
  return (
    <div>
      <button className="px-9 py-2 text-[15px] rounded-3xl bg-[#d6e22a] text-black">
        {bnText}
      </button>
    </div>
  );
};

export default Button
