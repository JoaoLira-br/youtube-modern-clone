import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

// this kind of syntax in the props is called object destructuring,
// we are extracting the videoId from id from video + snippet from video
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(videoId, snippet);
  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 'none'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* The optional chaining operator ?. allows you to safely access deeply nested properties of an object without having to explicitly check if each reference in the chain is valid (i.e., not null or undefined). */}
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={"bold"} color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight={"bold"} color="#FFF">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            {/* this is an icon, ml is margin-left */}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
          
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
