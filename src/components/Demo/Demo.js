
import Paragraph from './Paragraph';
import { React } from 'react';

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <Paragraph>{props.show ? "" : ""}</Paragraph>;
};

export default React.memo(DemoOutput);
