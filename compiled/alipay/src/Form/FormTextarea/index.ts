import { effect } from '@preact/signals-core';
import { resolveEventValue } from '../../_util/platform';
import { ComponentWithSignalStoreImpl, triggerEvent } from '../../_util/simply';
import i18nController from '../../_util/store';
import { createForm } from '../form';
import { FormTextareaDefaultProps } from './props';

ComponentWithSignalStoreImpl(
  {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  FormTextareaDefaultProps,
  {
    handleRef(input) {
      this.input = input;
    },
    onChange(value, e) {
      this.emit('onChange', resolveEventValue(value));
      triggerEvent(this, 'change', resolveEventValue(value), e);
    },
    onBlur(value, e) {
      triggerEvent(this, 'blur', resolveEventValue(value), e);
    },
    onFocus(value, e) {
      triggerEvent(this, 'focus', resolveEventValue(value), e);
    },
    onConfirm(value, e) {
      triggerEvent(this, 'confirm', resolveEventValue(value), e);
    },
    onClear(value, e) {
      this.emit('onChange', '');
      triggerEvent(this, 'change', resolveEventValue(value), e);
    },
  },
  null,
  [
    createForm({
      methods: {
        setFormData(this: any, values) {
          this.setData({
            ...this.data,
            formData: {
              ...this.data.formData,
              ...values,
            },
          });
          this.input && this.input.update(this.data.formData.value);
        },
      },
    }),
  ]
);
