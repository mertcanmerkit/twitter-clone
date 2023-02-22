<template>
  <component :is="icons[mIconName]"></component>
</template>

<script setup>
import * as Icon from '@/components/icons/utils/icon-components';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const mIconName = ref('');

watchEffect(() => {
  mIconName.value = props.iconName;
  if (route.name === props.navRouteName) {
    mIconName.value = props.iconName + 'Fill';
  }
  if (props.handleExploreNavActive) {
    mIconName.value = 'HashtagFill';
  }
});

const Home = Icon.Home;
const HomeFill = Icon.HomeFill;
const Hashtag = Icon.Hashtag;
const HashtagFill = Icon.HashtagFill;
const User = Icon.User;
const UserFill = Icon.UserFill;
const TwitterLogo = Icon.TwitterLogo;
const TwitterLogoFill = Icon.TwitterLogoFill;
const Settings = Icon.Settings;
const SettingsFill = Icon.SettingsFill;

const icons = {
  Home,
  HomeFill,
  Hashtag,
  HashtagFill,
  User,
  UserFill,
  TwitterLogo,
  TwitterLogoFill,
  Settings,
  SettingsFill
};

const props = defineProps([
  'iconName',
  'navRouteName',
  'handleExploreNavActive'
]);
</script>
