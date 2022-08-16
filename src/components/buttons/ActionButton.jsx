import * as React from 'react';

export default function ActionButton(props) {
  return (
    <>
      <button className={props.className} >{props.buttonName}</button>
    </>
  );
}