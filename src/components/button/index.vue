<template>
  <button
    :class="[
      {
        'button-standard': variation === 'standard',
        'button-standard button-standard--alpha': variation === 'alpha',
        'button-standard button-standard--beta': variation === 'beta',
        'button-standard button-standard--gamma': variation === 'gamma',
        'button-standard button-hollow': variation === 'hollow',
        'button-to-link button-to-link--alpha': variation === 'button-to-link-alpha',
        'button-flat button-flat--alpha': variation === 'flat-alpha',
        'button-flat button-flat--beta': variation === 'flat-beta',
        'button-flat button-flat--gamma': variation === 'flat-gamma',
        'button-standard--s': size === 'small',
        'button-standard--full': size === 'full',
        'bp-radix__button-standard--full': size === 'mobile-context-full'
      }
    ]"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>
<script>
import './button.css';

export default {
  inheritAttrs: false,
  props: {
    variation: {
      type: String,
      'default': 'alpha'
    },

    size: {
      type: String,
      'default': ''
    }
  },
};
</script>


