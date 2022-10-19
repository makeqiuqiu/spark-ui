import { useState } from 'react';
import TimePicker from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/TimePicker',
  component: TimePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  const [value, setValue] = useState('');
  return <TimePicker value={value} onChange={(v) => setValue(v)} {...args} />;
}

export const Normal = Template.bind({});
