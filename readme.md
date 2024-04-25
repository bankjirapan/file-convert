
# Self-hosted Image Converter

Self-hosted image converter is a system used to convert image files to the desired file format. It's a simple and straightforward project utilizing the basics from the sharp library, which is excellently developed. [Sharp](https://sharp.pixelplumbing.com/) manages the files. This project focuses on user interaction, such as uploading images and downloading converted files.

  

## Prerequisites

1. Node.js version >=18 and <= 20

2. Docker if you prefer working with Docker

  

## Installation Steps

1. Clone this repo or download it from [Release](#https://github.com/bankjirapan/self-file-convert/releases)

2. Install dependencies using the following command:

### pnpm

```

pnpm install

```

### npm

```

npm install

```

3. You can run the project using the command `npm start`.

  

## Installation Steps (Docker)

1. Clone this repo or download it from [Release](#https://github.com/bankjirapan/self-file-convert/releases)

  

2. Build the Dockerfile using the command:

```

docker-compose build

```

3. You can run the project using the command `docker-compose up`.