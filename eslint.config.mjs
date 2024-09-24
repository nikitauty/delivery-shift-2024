import { eslint } from '@nikitau/eslint';

export default eslint(
  {
    typescript: true,
    jsx: true,
    jsxA11y: true,
    react: true,
    stylistic: false,
  },
  {
    rules: {
      'nikitau-react/prop-types': 'off',
    },
  }
);
