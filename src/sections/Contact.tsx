// src/sections/ContactSection.tsx

import React, { useState } from 'react';
import styles from './Contact.module.css';

// Impor ikon dari react-icons
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';

const ContactSection: React.FC = () => {
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Di dunia nyata, di sini Anda akan mengirim data (formData) ke backend atau layanan email
    console.log('Form data submitted:', formData);
    alert('Pesan telah dikirim! (Cek console log)');
    // Reset form setelah submit
    setFormData({ name: '', email: '', contactNumber: '', subject: '', message: '' });
  };


  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Kolom Kiri */}
        <div className={styles.leftColumn}>
          <h2 className={styles.mainTitle}>Hubungi kami jika anda mempunyai pertanyaan:</h2>
          
          <div className={styles.workingHours}>
            <p className={styles.infoLabel}>Jam kerja</p>
            <p className={styles.infoText}>Senin sampai Jumat 08:30  – 17:00 WIB.</p>
          </div>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <IoLocationSharp size={20} className={styles.icon} />
              <p className={styles.infoText}>Ruko Kara Junction Blok B No.8 Batam Centre - Kepulauan Riau</p>
            </div>
            <div className={styles.contactItem}>
              <IoCall size={20} className={styles.icon} />
              <p className={styles.infoText}>(+62) 852 9511 2229</p>
            </div>
            <div className={styles.contactItem}>
              <IoMail size={20} className={styles.icon} />
              <p className={styles.infoText}>info.smsshipping@gmail.com</p>
            </div>
          </div>

          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className={styles.rightColumn}>
          <p className={styles.description}>
            Tim kami siap membantu Anda dengan solusi yang dipersonalisasi dan tanggapan yang cepat. Jika Anda memiliki pertanyaan tentang layanan kami, kami hanya berjarak satu pesan atau telepon saja!
          </p>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nama *" required className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email *" required className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} placeholder="Nomor Telepon *" required className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subjek" className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Pesan" rows={3} className={styles.textareaField}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              <span>Submit Message</span>
              <IoIosArrowRoundForward size={28} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;