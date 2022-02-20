import { Text } from "@chakra-ui/react";
import { CompositeDecorator } from "draft-js";
import ContentStateInlineStyle from "draft-js/lib/ContentStateInlineStyle";
import React from "react";

const sizeMapping = {
  'one': 'xl',
  'two': 'lg',
  'three': 'md',
  'four': 'sm',
  'five': 'xs',
  'six': 'xs'
}

class CustomText extends React.Component {

  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return <Text fontSize={this.props.blockProps.fontSize}>
      {this.props.block.getText()}
    </Text>
  }
}
