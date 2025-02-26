import MyButton from './Button.vue';

export default {
  title: 'Njuskalo/Button',
  component: MyButton,
  tags: ['autodocs'],
};

export const ButtonVariations = {
  args: {
    variation: 'standard',
    size: '',
    label: 'Button Text',
  },
  argTypes: {
    variation: {
      control: 'select',
      options: [
        'standard',
        'alpha',
        'beta',
        'gamma',
        'hollow',
        'button-to-link-alpha',
        'flat-alpha',
        'flat-beta',
        'flat-gamma',
      ],
      description: 'Button variation style',
    },
    size: {
      control: 'select',
      options: [
        '',
        'small',
        'full',
        'mobile-context-full',
      ],
      description: 'Button size',
    },
  },
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p><strong>Current Style:</strong> {{ args.variation }} {{ args.size ? '+ ' + args.size : '' }}</p>
        <MyButton :variation="args.variation" :size="args.size">
            {{ args.label || 'Button ' + args.variation }}
        </MyButton>
      </div>
    `,
  }),
};

// Individual stories for each variation
export const Standard = {
  args: {
    variation: 'standard',
    size: '',
  },
  render: ButtonVariations.render,
};

export const Alpha = {
  args: {
    variation: 'alpha',
    size: '',
  },
  render: ButtonVariations.render,
};

export const Beta = {
  args: {
    variation: 'beta',
    size: '',
  },
  render: ButtonVariations.render,
};

export const Gamma = {
  args: {
    variation: 'gamma',
    size: '',
  },
  render: ButtonVariations.render,
};

export const Hollow = {
  args: {
    variation: 'hollow',
    size: '',
  },
  render: ButtonVariations.render,
};

export const ButtonToLinkAlpha = {
  args: {
    variation: 'button-to-link-alpha',
    size: '',
  },
  render: ButtonVariations.render,
};

export const FlatAlpha = {
  args: {
    variation: 'flat-alpha',
    size: '',
  },
  render: ButtonVariations.render,
};

export const FlatBeta = {
  args: {
    variation: 'flat-beta',
    size: '',
  },
  render: ButtonVariations.render,
};

export const FlatGamma = {
  args: {
    variation: 'flat-gamma',
    size: '',
  },
  render: ButtonVariations.render,
};
