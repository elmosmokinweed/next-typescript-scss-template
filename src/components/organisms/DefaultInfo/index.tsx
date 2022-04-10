import Image from 'next/image';
import React from 'react';
import { Typography } from 'src/components/atoms/Typography';
import { DownloadLink } from 'src/components/molecules/DownloadLink';
import styles from './default-info.module.scss';

export const DefaultInfo: React.FC = () => {
  return (
    <div className={styles.root}>
      <article className={styles.root__content}>
        <div className={styles.root__content__image}>
          <Image src="/images/logo-big.svg" width="559" height="124" />
        </div>
        <div className={styles.root__description}>
          <Typography preset="title1" align="center">
            N<Typography component="span">ext</Typography>T
            <Typography component="span">typeScript</Typography>S
            <Typography component="span">css</Typography> tempalte
          </Typography>
          <Typography
            preset="common1"
            className={styles.root__description__main}
            align="center"
          >
            This is template for your Next.JS applications. Comes with built-in
            TypeScript and SCSS. Also has some utils, hooks etc. You can clone
            repository from GitHub below.
          </Typography>
          <DownloadLink
            title="GitHub"
            link="https://www.google.com"
            imageSrc="/images/github.svg"
          />
          <Typography preset="common1" align="center">
            If this template was useful for you, please give a star to this
            GitHub repository :)
          </Typography>
        </div>
      </article>
    </div>
  );
};
