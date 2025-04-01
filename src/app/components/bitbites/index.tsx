/** @jsxImportSource @emotion/react */
"use client"
import {sectionBox,aTag} from './styles.js';
export default function BitsBites() {
  return (
    <div className='mb-5'>
        <h2 className='section-header text-2xl md:text-3xl font-semibold'>
        Bites & Bytes
        </h2>
        <div css={sectionBox}>
          <p>🎖️ Top Linkedin Voice in Software Development</p>
          <p>🏆 MVP of the Quater Award - For leadership, mentoring and quick deliverables</p>
          <p>⭐️ Limelight Award - Quick Learner</p>
          <p>🥇 ABDM Hackathon Winner - Issued by National Health Authority </p>
        </div>
        <div css={sectionBox}>
          <p>📚 My Book-Bites, Pages & Perspectives: 
          </p> 
            <ul >
              <li>
              👓 Instagram: <a css={aTag} target='_blank' href="https://www.instagram.com/stories_sum_up/">@stories_sum_up</a> 
              </li>
              <li>
              👓 Blogs:  <a css={aTag} target='_blank' href="https://stories-sum-up.medium.com/">#stories-sum-up </a>
              </li>
            </ul>
        </div>
        <div css={sectionBox}>
          <p>👩🏻‍💻 Learn redux at: <a css={aTag} target='_blank' href="https://www.youtube.com/watch?v=CJa4mjSzyIw">Redux Hands On</a>
          </p> 
        </div>        
    </div>
  )
}

