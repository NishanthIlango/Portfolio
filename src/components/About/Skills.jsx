import React from "react";

import skills from "../../data/skills.json"
import tools from "../../data/tools.json"
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css"
export const Skills=()=>{
    return <div className={styles.container}>
                <h1 className={styles.title}>Professional SkillSets</h1>
                <div className={styles.content}>
                    <div className={styles.skills}> 
                        {skills.map((skill,id)=>{
                            return (
                                <div key={id} className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                                    
                            );
                        })}
                    </div>
                </div>
                <h1 className={styles.title2}>Tools I use</h1>
                <div className={styles.content}>
                    <div className={styles.skills2}> 
                        {tools.map((skill,id)=>{
                            return (
                                <div key={id} className={styles.skill2}>
                                    <div className={styles.skillImageContainer}>
                                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                                    
                            );
                        })}
                    </div>
                </div>
            </div>
}