/** @jsxImportSource @emotion/react */
"use client"
import { sectionBox, aTag } from './styles.js';
export default function BitsBites() {
  return (
    <div className='mb-[32px]'>
      <div className="flex items-center gap-[12px] mb-[24px]">
        <span className="h-[32px] w-[4px] bg-gradient-to-b from-purple-500 to-indigo-500 rounded-[9999px]"></span>
        <h2 className='text-[24px] md:text-[30px] font-bold tracking-tight text-[var(--text-primary)]'>
          Bites & Bytes
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-[24px]'>
        {/* Honors & Recognition Bento Card */}
        <div css={sectionBox} className='md:col-span-2 flex flex-col justify-between'>
          <div>
            <h3 className='text-[18px] font-bold text-[var(--text-primary)] mb-[16px] flex items-center gap-[8px]'>
              <span>🎖️</span> Honors & Achievements
            </h3>
            <ul className='space-y-[12px] text-[14px] text-[var(--text-secondary)]'>
              <li className='flex items-center gap-[8px]'>
                <span className='w-[6px] h-[6px] rounded-[9999px] bg-[var(--text-accent)] flex-shrink-0'></span>
                Google Developer Expert in Firebase
              </li>
              <li className='flex items-center gap-[8px]'>
                <span className='w-[6px] h-[6px] rounded-[9999px] bg-[var(--text-accent)] flex-shrink-0'></span>
                Top LinkedIn Voice in Software Development
              </li>
              <li className='flex items-center gap-[8px]'>
                <span className='w-[6px] h-[6px] rounded-[9999px] bg-[var(--text-accent)] flex-shrink-0'></span>
                MVP of the Quarter Award — Leadership, mentoring & deliverables
              </li>
              <li className='flex items-center gap-[8px]'>
                <span className='w-[6px] h-[6px] rounded-[9999px] bg-[var(--text-accent)] flex-shrink-0'></span>
                Limelight Award — Quick Learner
              </li>
              <li className='flex items-center gap-[8px]'>
                <span className='w-[6px] h-[6px] rounded-[9999px] bg-[var(--text-accent)] flex-shrink-0'></span>
                ABDM Hackathon Winner — Issued by National Health Authority
              </li>
            </ul>
          </div>
        </div>

        {/* Publications & Content Card */}
        <div css={sectionBox} className='flex flex-col justify-between'>
          <div>
            <h3 className='text-[18px] font-bold text-[var(--text-primary)] mb-[16px] flex items-center gap-[8px]'>
              <span>📚</span> Pages & Perspectives
            </h3>
            <div className='space-y-[12px] text-[14px] text-[var(--text-secondary)]'>
              <h5 className='text-[var(--text-muted)] text-[12px] font-medium'>Book-Bites & Tech Thoughts:</h5>
              <div className='flex flex-col gap-[12px] pt-[4px]'>
                <a css={aTag} target='_blank' href="https://www.instagram.com/stories_sum_up/" className='flex items-center gap-[8px] group'>
                  <span>👓 Instagram:</span>
                  <span className='underline group-hover:opacity-80'>@stories_sum_up</span>
                </a>
                <a css={aTag} target='_blank' href="https://stories-sum-up.medium.com/" className='flex items-center gap-[8px] group'>
                  <span>👓 Medium Blogs:</span>
                  <span className='underline group-hover:opacity-80'>#stories-sum-up</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Video Tutorial Card */}
        <div css={sectionBox} className='md:col-span-3 flex items-center justify-between flex-wrap gap-[16px]'>
          <div className='flex items-center gap-[12px]'>
            <span className='text-[24px]'>👩🏻‍💻</span>
            <div>
              <h4 className='text-[16px] font-bold text-[var(--text-primary)]'>Redux Hands-On Tutorial</h4>
              <p className='text-[12px] text-[var(--text-muted)]'>Learn state management step-by-step on YouTube</p>
            </div>
          </div>
          <a
            css={aTag}
            target='_blank'
            href="https://www.youtube.com/watch?v=CJa4mjSzyIw"
            className='px-[16px] py-[8px] rounded-[9999px] bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[12px] font-semibold hover:border-[var(--card-border-hover)] transition shadow-sm'
          >
            Watch Video Tutorial ↗
          </a>
        </div>
      </div>
    </div>
  )
}



