export type Look = { skin: string; hair: string; hairColor: string; top: string; topColor: string; face: string; accessory: string }
export type Passport = { nickname: string; interests: string[]; social: string; bio: string }
export type Post = { id: string; title: string; body: string; tags: string[]; author: string; time: string; reactions: Record<string, number> }
export type Profile = { look: Look; passport: Passport }
export const defaultProfile: Profile = {
  look: { skin: '#f1c7a8', hair: '短捲髮', hairColor: '#59453f', top: '大學 T', topColor: '#a4b99a', face: '微笑', accessory: '觸控筆' },
  passport: { nickname: '小日子', interests: ['原創插畫', '咖啡巡禮'], social: '社恐潛水員', bio: '把喜歡的事，慢慢畫下來 ☁️' }
}
const PROFILE_KEY = 'secret-base-profile-v1'
const POSTS_KEY = 'secret-base-posts-v1'
export function readProfile(): Profile | null { try { const v = localStorage.getItem(PROFILE_KEY); return v ? JSON.parse(v) as Profile : null } catch { return null } }
export function saveProfile(v: Profile) { localStorage.setItem(PROFILE_KEY, JSON.stringify(v)) }
export function readPosts(): Record<string, Post[]> { try { const v = localStorage.getItem(POSTS_KEY); return v ? JSON.parse(v) as Record<string, Post[]> : {} } catch { return {} } }
export function savePosts(v: Record<string, Post[]>) { localStorage.setItem(POSTS_KEY, JSON.stringify(v)) }
