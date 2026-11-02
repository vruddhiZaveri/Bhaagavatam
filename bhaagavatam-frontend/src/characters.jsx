import React,{useState} from 'react';
import {ArrowRight,BookOpen,LockKeyhole,Users} from 'lucide-react';
import './characters.css';

const portraits={
 Krishna:'01-krishna-character-portrait.webp',
 Arjuna:'02-arjuna-character-portrait.webp',
 Draupadi:'03-draupadi-character-portrait.webp',
 Bhishma:'04-bhishma-character-portrait.webp',
 Rama:'39-ramayana-a-golden-epic-journey.webp',
 Sita:'41-ramayana-the-beginning-of-a-greater-journey.webp',
 Hanuman:'40-ramayana-a-journey-of-dharma.webp',
 Shiva:'45-shiva-at-kailash-eternal-ascetic.webp',
 Vishnu:'09-cosmic-ocean-vishnu.webp'
};
export const storyCharacters={
 gita:[['Krishna','Guide and charioteer','Krishna guides Arjuna through questions of duty, action, and understanding.'],['Arjuna','Warrior and seeker','Arjuna faces a profound moral dilemma on the battlefield.']],
 ramayana:[['Rama','Central figure','Rama is central to the epic’s exploration of duty, family, and kingship.'],['Sita','Central figure','Sita is a central figure whose experiences are integral to the narrative.'],['Hanuman','Devoted ally','Hanuman is known for courage, service, and devotion.']],
 krishna:[['Krishna','Central figure','The story follows Krishna through different phases of his life.']],
 shiva:[['Shiva','Central figure','Shiva appears across traditions in narratives of transformation and cosmic balance.']],
 mahabharata:[['Krishna','Guide and ally','Krishna plays an important role in the events surrounding Kurukshetra.'],['Arjuna','Pandava warrior','Arjuna is one of the Pandava brothers and a major warrior.'],['Draupadi','Central figure','Draupadi’s experiences are pivotal to the epic.'],['Bhishma','Elder of the Kuru family','Bhishma’s vows and duties shape the epic’s events.']],
 cosmic:[['Vishnu','Figure in creation traditions','Vishnu appears in some Puranic accounts of cosmic origins.']]
};
export function CharactersYouMet({storyId,storyTitle,context='story',onOpen}){
 const people=storyCharacters[storyId]||[];
 if(!people.length)return null;
 return <section className="characters-section" aria-label="Characters you met">
  <div className="characters-heading"><div><span className="eyebrow">THE PEOPLE BEHIND THE STORY</span><h2>{context==='preview'?'Meet the Characters':'Characters You Met'}</h2><p>{context==='preview'?'Spoiler-free introductions before you begin.':'Explore the characters and relationships behind this story.'}</p></div><span className="characters-count"><Users size={15}/>{people.length} characters</span></div>
  <div className="characters-grid">{people.map(([name,role,summary])=><article className="character-card" key={name}>
   <img src={'/art/'+portraits[name]} alt={name+' artwork'} loading="lazy"/>
   <div><span className="eyebrow">{role}</span><h3>{name}</h3><p>{summary}</p><button className="character-link" onClick={()=>onOpen?.(name)}>View character profile <ArrowRight size={15}/></button></div>
  </article>)}</div>
  <p className="characters-note"><LockKeyhole size={14}/> These are spoiler-light introductions. Detailed chapter-by-chapter revelations will be added when verified story content is available.</p>
 </section>
}
export function CharacterUniverse({stories,onStory,onProfile}){
 const [storyId,setStoryId]=useState('gita');
 const story=stories.find(s=>s.id===storyId)||stories[0];
 return <section className="characters-universe">
  <div className="page-heading"><span className="eyebrow">KNOWLEDGE UNIVERSE · CHARACTERS</span><h1>People behind <em>the stories</em></h1><p>Choose a story to discover its characters. Explore their roles without revealing major plot events.</p></div>
  <div className="characters-picker"><label htmlFor="character-story">Explore characters from</label><select id="character-story" value={storyId} onChange={e=>setStoryId(e.target.value)}>{stories.filter(s=>storyCharacters[s.id]).map(s=><option key={s.id} value={s.id}>{s.title}</option>)}</select><button onClick={()=>onStory(story)}><BookOpen size={16}/> Open story <ArrowRight size={15}/></button></div>
  <CharactersYouMet storyId={storyId} storyTitle={story.title} context="preview" onOpen={name=>onProfile(storyId,name)}/>
 </section>
}
export function CharacterProfile({storyId,name,onBack}){
 const person=(storyCharacters[storyId]||[]).find(p=>p[0]===name);
 if(!person)return null;
 const [title,role,summary]=person;
 const related=Object.entries(storyCharacters).filter(([,people])=>people.some(p=>p[0]===name)).map(([id])=>id);
 return <section className="character-profile"><button className="back-link" onClick={onBack}>← Back to characters</button><div className="character-profile-layout"><img src={'/art/'+portraits[name]} alt={name+' artwork'}/><div><span className="eyebrow">CHARACTER PROFILE · SPOILER-LIGHT</span><h1>{name}</h1><h3>{role}</h3><p>{summary}</p><h3>Appears in</h3><p>{related.map(id=>({gita:'The Bhagavad Gita',ramayana:'The Ramayana',krishna:'Life of Krishna',shiva:'Shiva Purana',mahabharata:'The Mahabharata',cosmic:'Cosmic Origins'}[id]||id)).join(' · ')}</p><div className="characters-note"><LockKeyhole size={16}/> More detailed relationships, motivations, and story milestones will be introduced alongside source-verified chapters.</div></div></div></section>
}
