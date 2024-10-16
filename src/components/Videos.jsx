import { Box, Stack } from '@mui/material';
import React from 'react'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {
    // console.log(videos);
    if(!videos?.length) return 'loading...';

  return (
    <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent={"start"} gap={2}>f
      {videos.map((item, idx) => {
        return <>  
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} /> }
        </Box>
        </>
      })}
      </Stack>
  )
}

export default Videos