import React from 'react';
// import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
    name: 'Memora - A Gen AI based react application using GPT to create mindmaps, flashcards, quizzes based on the transcripts/lecture notes' ,
    url:'https://devpost.com/software/memora-4n0frp'
    },
    {
      name: 'Philia - A Generative AI cross platform mobile application using GPT to create posts in social media',
      url: 'https://devpost.com/software/philia-4xy8h9',
    },
    {
      name: 'Music Generation with GANs',
      url: 'https://github.com/harshitapasumarthy-git/MusicGenerationGAN',
    },
    {
      name: 'Receipt Classification using ML, DL and NLP Techniques',
      url: 'https://github.com/harshitapasumarthy-git/automatedReceipt',
    },
    {
      name: 'Image Segmentation using KMeans',
      url: 'https://github.com/harshitapasumarthy-git/Image_Segmentation',
    },
    {
      name: 'Search Algorithm analysis using React.JS',
      url: 'https://github.com/harshitapasumarthy-git/SearchingAlgorithms',
    },
    {
      name: 'Phonebook API Input Validation using Java Springboot',
      url: 'https://github.com/harshitapasumarthy-git/Phonebook-API-Input-Validation',
    },
    {
      name: 'Implementing Linear and Logistic Regression from scratch in Python',
      url: 'https://github.com/harshitapasumarthy-git/ML_Algo',
    },
    {
      name: 'Comparison of different Sales forecasting Algorithm',
      url: 'https://github.com/harshitapasumarthy-git/SalesForecastingComparison',
    },
    {
      name: 'Toy Search Engine using NLP (TF-IDF) from scratch',
      url: 'https://github.com/harshitapasumarthy-git/ToySearchEngine',
    },
   
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {/* <ol> */}
        {projectList.map((project, index) => (
          <li key={index}>
           
            
            <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.name}
            </a>
       
          </li>
        ))}
      {/* </ol> */}
    </section>
  );
};




export default Projects;