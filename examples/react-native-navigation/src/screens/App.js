import React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  ABSOLUTE_HEADER,
  FIXED_CONTENT,
  FLAT_LIST,
  SECTION_LIST,
  SIMPLE_CONTENT,
  SNAPPING_LIST,
  ANIMATED_VALUE,
  FACEBOOK_WEBVIEW,
} from '../screens';
import { Layout } from '../components/layout/Layout';
import { Header } from '../components/header/Header';
import { Button } from '../components/button/Button';

import { AlwaysOpen } from './AlwaysOpen';

export const App = () => {
  const handleOverlay = name => {
    Navigation.showOverlay({
      component: {
        name,
        options: {
          overlay: {
            interceptTouchOutside: true,
            handleKeyboardEvents: true,
          },
          layout: {
            componentBackgroundColor: 'transparent',
          },
        },
      },
    });
  };

  const renderButtons = links => {
    return links.map((link, i) => (
      <Button key={i} onPress={() => handleOverlay(link.id)} name={link.name} />
    ));
  };

  return (
    <Layout>
      <Header subheading="Run with React Native Navigation" />

      {renderButtons([
        { name: 'Simple content', id: SIMPLE_CONTENT },
        { name: 'Fixed content', id: FIXED_CONTENT },
        { name: 'Snapping list', id: SNAPPING_LIST },
        { name: 'Absolute header', id: ABSOLUTE_HEADER },
        { name: 'Flat List', id: FLAT_LIST },
        { name: 'Section List', id: SECTION_LIST },
        { name: 'Animated Value', id: ANIMATED_VALUE },
        { name: 'Facebook WebView', id: FACEBOOK_WEBVIEW },
      ])}

      <AlwaysOpen />
    </Layout>
  );
};
