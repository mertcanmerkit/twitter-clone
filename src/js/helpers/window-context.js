import { ref, watchEffect, computed } from 'vue';

export const useMedia = (querySelector, windowArg = null) => {
  if (windowArg === null) {
    windowArg = window;
  }
  const xs = 500,
    sm = 768,
    md = 1024,
    lg = 1280,
    xl = 1920,
    screenXsMin = xs + 'px',
    screenSmMin = sm + 'px',
    screenMdMin = md + 'px',
    screenLgMin = lg + 'px',
    screenXlMin = xl + 'px',
    screenXxsMax = xs - 1 + 'px',
    screenXsMax = sm - 1 + 'px',
    screenSmMax = md - 1 + 'px',
    screenMdMax = lg - 1 + 'px',
    screenLgMax = xl - 1 + 'px',
    screenXlMax = '5000px';

  const mQuery = ref('');

  switch (querySelector) {
    case 'xxs':
      mQuery.value = `screen and (max-width: ${screenXxsMax})`;
      break;
    case 'mobile':
    case 'gt-xxs':
      mQuery.value = `screen and (min-width: ${screenXsMin})`;
      break;

    case 'xs':
      mQuery.value = `screen and (min-width: ${screenXsMin}) and (max-width: ${screenXsMax})`;
      break;
    case 'lt-xs':
      mQuery.value = `screen and (max-width: ${screenXxsMax})`;
      break;
    case 'gt-xs':
      mQuery.value = `screen and (min-width: ${screenSmMin})`;
      break;

    case 'sm':
      mQuery.value = `screen and (min-width: ${screenSmMin}) and (max-width: ${screenSmMax})`;
      break;
    case 'lt-sm':
      mQuery.value = `screen and (max-width: ${screenXsMax})`;
      break;
    case 'gt-sm':
      mQuery.value = `screen and (min-width: ${screenMdMin})`;
      break;

    case 'md':
      mQuery.value = `screen and (min-width: ${screenMdMin}) and (max-width: ${screenMdMax})`;
      break;
    case 'lt-md':
      mQuery.value = `screen and (max-width: ${screenSmMax})`;
      break;
    case 'gt-md':
      mQuery.value = `screen and (min-width: ${screenLgMin})`;
      break;

    case 'lg':
      mQuery.value = `screen and (min-width: ${screenLgMin}) and (max-width: ${screenLgMax})`;
      break;
    case 'lt-lg':
      mQuery.value = `screen and (max-width: ${screenMdMax})`;
      break;
    case 'gt-lg':
      mQuery.value = `screen and (min-width: ${screenXlMin})`;
      break;

    case 'xl':
      mQuery.value = `screen and (min-width: ${screenXlMin}) and (max-width: ${screenXlMax})`;
      break;
    case 'lt-xl':
      mQuery.value = `screen and (max-width: ${screenLgMax})`;
      break;
  }

  const matches = ref(true);

  watchEffects(windowArg, matches, mQuery);
  const media = windowArg.matchMedia(mQuery.value);

  return computed(() => !matches.value);
};
export const watchEffects = (windowArg, matches, mQuery) => {
  watchEffect((onInvalidate) => {
    const media = windowArg.matchMedia(mQuery.value);
    if (media.matches !== matches.value) {
      matches.value = media.matches;
    }

    const onChange = () => {
      matches.value = media.matches;
    };

    media.addEventListener('change', onChange);
    onInvalidate(() => {
      media.removeEventListener('change', onChange);
    });
  });
};
