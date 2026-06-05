// src/data/researchData.js
import peftMedsam from "../assets/images/peft_medsam.png";

const researchData = [
    {
        title: "PEFT-MedSAM: Efficient Fine-Tuning of Medical Foundation Models for Explainable Skin Lesion Segmentation",
        image: peftMedsam,
        abstract:
            "A parameter-efficient fine-tuning framework that adapts the Medical Segment Anything Model (MedSAM) for explainable skin lesion segmentation by training only 4.3% of parameters. It achieves a Dice score of 0.9445 and IoU of 0.8980 on ISIC 2018, integrating Grad-CAM explainability for clinical trustworthiness.",
        supervisor: "DR Ali Asghar Chandio",
        keywords: ["PEFT", "MedSAM", "Skin Lesion Segmentation", "Explainable AI"],
        paperLink: "#",
        githubLink: "#",
    }
];

export default researchData;
