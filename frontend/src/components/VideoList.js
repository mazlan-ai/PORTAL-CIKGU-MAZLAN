import React from 'react';

const VideoList = () => {
    const videos = [
        { id: 1, title: 'Tutorial 1', url: 'https://example.com/video1' },
        { id: 2, title: 'Tutorial 2', url: 'https://example.com/video2' },
        { id: 3, title: 'Tutorial 3', url: 'https://example.com/video3' },
    ];

    return (
        <div>
            <h2>Video Tutorials</h2>
            <ul>
                {videos.map(video => (
                    <li key={video.id}>
                        <a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoList;