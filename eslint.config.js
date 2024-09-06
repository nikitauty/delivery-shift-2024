import { eslint } from '@nikitau/eslint';

export default eslint(
  {
    typescript: true,
    jsx: true,
    jsxA11y: true,
    react: true,
    stylistic: true
  },
  {
    rules: {
      'nikitau-react/prop-types': 'off'
    }
  }
);
