import Image from 'next/image';
import React from 'react';
import { Typography } from 'src/components/atoms/Typography';
import styles from './download-link.module.scss';

export type DownloadLinkProps = {
  title: string;
  link: string;
  imageSrc: string;
};

export const DownloadLink: React.FC<DownloadLinkProps> = ({
  title,
  link,
  imageSrc,
}) => {
  return (
    <a className={styles.root} href={link}>
      <Image
        src={imageSrc}
        height="32"
        width="32"
        className={styles.root__image}
      />
      <div className={styles.root__text}>
        <Typography preset="common2" color="paragraph">
          {title}
        </Typography>
      </div>
    </a>
  );
};
