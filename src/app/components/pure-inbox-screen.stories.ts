import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';

import { TaskModule } from './task.module';
import { TasksState } from '../state/task.state';
import { NgxsModule, Store } from '@ngxs/store';

export default {
  component: PureInboxScreenComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  ],
  title: 'PureInboxScreen',
} as Meta;

const Template: Story<PureInboxScreenComponent> = args => ({
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};
