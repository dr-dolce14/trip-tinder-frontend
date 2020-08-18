import React from "react";
import faker from "faker";
import _ from "lodash";
import { Dropdown } from "semantic-ui-react";

  const addressDefinitions = faker.definitions.address;
  const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
    key: addressDefinitions.state_abbr[index],
    text: state,
    value: addressDefinitions.state_abbr[index],
  }));

  const StateDropdownMenu = () => (
    <Dropdown placeholder='State' search selection options={stateOptions} />
  );

  export default StateDropdownMenu

  