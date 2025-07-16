// src/sections/ContactSection.tsx

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify';

// Import ikon dari react-icons
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';
import { FaTiktok, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  
  // State untuk mengelola setiap input form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: '',
  });

  // Fungsi untuk menangani perubahan pada input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Mengirim email menggunakan fetch ke PHP endpoint
          const result = await fetch('https://samudramajusejati.com/contact.php', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
          });
      
      // Periksa apakah response berhasil
      if (!result.ok) {
          const errorText = await result.text();
          console.error('Server result:', errorText);
          throw new Error(`HTTP error! status: ${result.status}`);
      }

      const responseData = await result.json();
      
      console.log('Response from server:', responseData);
      
      // Periksa apakah pengiriman berhasil
      if (responseData.success) {
        toast.success('Pesan berhasil dikirim!');
        
        // Reset form setelah berhasil
        setFormData({ 
          name: '', 
          email: '', 
          contactNumber: '', 
          subject: '', 
          message: '' 
        });
      } else {
        throw new Error(responseData.error || 'Pengiriman gagal');
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Tampilkan pesan error yang lebih spesifik
      if (error instanceof Error) {
        toast.error(`Gagal mengirim pesan: ${error.message}`);
      } else {
        toast.error('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Kolom Kiri */}
        <div className={styles.leftColumn}>
          <h2 className={styles.mainTitle}>{t('contactTitle')}</h2>
          

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <IoLocationSharp size={20} className={styles.icon} />
              <p className={styles.infoText}>{t('contact_address')}</p>
            </div>
            <div className={styles.contactItem}>
              <IoCall size={20} className={styles.icon} />
              <p className={styles.infoText}>(+62) 852 9511 2229</p>
            </div>
            <div className={styles.contactItem}>
              <IoMail size={20} className={styles.icon} />
              <p className={styles.infoText}>cs@samudramajusejati.com</p>
            </div>
          </div>

          <div className={styles.socialIcons}>
            <a href="https://www.tiktok.com/@smsshipping.agency" aria-label="Tiktok" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://www.instagram.com/smsshipping.agency/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className={styles.rightColumn}>
          <p className={styles.description}>
            {t('contactDesc')}
          </p>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                placeholder={t('contactName')} 
                required 
                className={styles.inputField}
                disabled={isLoading}
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                placeholder={t('contactEmail')} 
                required 
                className={styles.inputField}
                disabled={isLoading}
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="tel" 
                id="contactNumber" 
                name="contactNumber" 
                value={formData.contactNumber} 
                onChange={handleInputChange} 
                placeholder={t('contactPhoneNumber')} 
                required 
                className={styles.inputField}
                disabled={isLoading}
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleInputChange} 
                placeholder={t('contactSubject')} 
                className={styles.inputField}
                disabled={isLoading}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
                placeholder={t('contactMessage')} 
                rows={3} 
                className={styles.textareaField}
                disabled={isLoading}
              />
            </div>
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isLoading}
            >
              <span>{isLoading ? 'Mengirim...' : t('contactButton')}</span>
              <IoIosArrowRoundForward size={28} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;