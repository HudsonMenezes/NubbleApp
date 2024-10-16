import React from 'react';

import {Post} from '@domain';

import {Box, Icon, Text, TouchableOpacityBox, IconProps} from '@components';

type Props = Pick<Post, 'commentCount' | 'reactionCount' | 'favoriteCount'>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function likePost() {
    //TODO: Implement likePost
  }

  function navigateToComments() {
    //TODO: Implement navigateToComments
  }

  function favoitePost() {
    //TODO Implement favoritePost
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked={true}
        onPress={likePost}
        text={reactionCount}
        icon={{default: 'heart', marked: 'heartFill'}}
      />
      <Item
        marked={false}
        onPress={navigateToComments}
        text={commentCount}
        icon={{default: 'comment', marked: 'comment'}}
      />
      <Item
        marked={false}
        onPress={favoitePost}
        text={favoriteCount}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({icon, marked, onPress, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      mr="s24"
      flexDirection="row"
      alignItems="center"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
        size={24}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
