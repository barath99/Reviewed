import React,{ useCallback, useMemo, useState, useEffect }  from 'react';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
import { Player } from '@livepeer/react';
import { useCreateAsset, useAssetMetrics} from '@livepeer/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const Gallery = () => {

  const [video, setVideo] = useState(undefined);

  const { mutate: createAsset, data: asset, status, progress, error } = useCreateAsset(
    video
      ? {
          sources: [{ name: video.name, file: video }],
        }
      : null
  );

  const { data: metrics } = useAssetMetrics({
    assetId: asset?.[0].id,
    refetchInterval: 30000,
  });
  
  
  const onDrop = useCallback(async (acceptedFiles) => {
  if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
    setVideo(acceptedFiles[0]);
  }
}, []);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    
  maxFiles: 1,
  onDrop,});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  const isLoading = useMemo(
    () =>
      status === 'loading' ||
      (asset?.[0] && asset[0].status?.phase !== 'ready'),
    [status, asset],
  );

  const progressFormatted = useMemo(
    () =>
      progress?.[0].phase === 'failed'
        ? 'Failed to process video.'
        : progress?.[0].phase === 'waiting'
        ? 'Waiting'
        : progress?.[0].phase === 'uploading'
        ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
        : progress?.[0].phase === 'processing'
        ? `Processing: ${Math.round(progress?.[0].progress * 100)}%`
        : null,
    [progress],
  );

  const videos = [
    { id: 1, url: 'https://youtu.be/5BQQM4uvRkw' },
    { id: 2, url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 3, url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    // add more videos as needed
  ];

  const { walletAddressForVideo } = useAccount();
  const assetId = '64d3ddee-c44b-4c9c-8739-c3c530d6dfea';

  const { mutate: updateAsset, status: updateStatus } = useUpdateAsset({
    assetId,
    storage: {
      ipfs: true,
      // metadata overrides can be added here
      // see the source code behind this example
    },
  });

  return (
    <>
    <section class="relative w-full bg-white tails-selected-element">
    <div class="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
    <div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
    
    <section className="container mx-auto justify-center align-items-center">
    <ConnectButton />

      <div {...getRootProps({style})} className="mt-4">
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        {video ? <p>{video.name}</p> : <p>Select a video file to upload.</p>}
        {progressFormatted && <p>{progressFormatted}</p>}

        </div>
      <button
        className=" mt-4 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => {
          updateAsset?.();
        }}
        disabled={isLoading || !createAsset}
        >
        Upload
      </button>
    </section>
    
    <div class="flex grid h-full grid-cols-6 gap-10 pb-10 mt-8 sm:mt-16">
    {asset?.[0]?.playbackId && (
        <Player title={asset[0].name} playbackId={asset[0].playbackId} />
      )}
    {videos.map((video) => (
      <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" key={video.id}>
        <Player
          title="MKBHD: Whats new in iPad Pro?"
          // playbackId="f5eese9wwl88k4g8"
          src={'https://ipfs.livepeer.com/ipfs/bafybeia5xxxcwemknw7hzzdsem5vf6gtyx4cjgpddm6udpa74r33irsnu4'}
          poster={'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'}
          showPipButton
          objectFit="cover"
          priority
        />
      </div>
    ))}

    </div>
    </div>
    </section>
  </>
  );
};

export default Gallery;






    
