import React from 'react';
import styles from '../../../styles/pages/Components/CapabilitiesPages/ClientList.module.css';
import Image from 'next/image';

const clients = [
  { id: 1, src: '/clients/marutiwhite.png', alt: 'Maruti' },
  { id: 2, src: '/clients/macquariewhite.png', alt: 'Macquarie' },
  { id: 3, src: '/clients/godaddywhite.png', alt: 'GoDaddy' },
  { id: 4, src: '/clients/gyansyswhite.png', alt: 'Gyansys' },
  { id: 5, src: '/clients/dellwhite.png', alt: 'Dell' },
];

const ClientsList = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h3 className={styles.heading}>Building the Future with Our Forward-Thinking Clients</h3>
        <div className={styles.logoContainer}>
          {clients.map((client) => (
            <div key={client.id} className={styles.logoWrapper}>
              <Image
                src={client.src}
                alt={client.alt}
                width={200}
                height={100}
                sizes="(max-width: 768px) 150px, (max-width: 480px) 120px, 200px"
                style={{ objectFit: 'contain' }}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsList;