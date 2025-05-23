import { Component, IPlatformEvent, triggerEvent } from '../_util/simply';
import { EmptyFunctionalProps } from './props';

Component({
  props: EmptyFunctionalProps,
  methods: {
    onClickButton(e: IPlatformEvent) {
      const { item } = e.currentTarget.dataset;
      triggerEvent(this, 'clickButton', item);
    },
  },
});
