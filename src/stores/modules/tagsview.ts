/*
 * @Description: 标签栏导航
 * @Version: 2.0
 * @Autor: Tansir
 * @Date: 2022-03-30 11:08:24
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-03 11:12:51
 */
import { defineStore } from 'pinia';
import type { RouteLocationNormalized } from 'vue-router';

// export interface TagView extends Partial<RouteLocationNormalized> {
//   title?: string;
// }

export type TagView = Partial<RouteLocationNormalized>;

export interface TagsViewState {
  visitedViews: TagView[];
  cachedViews: string[];
}

export const useTagsViewStateStore = defineStore({
  id: 'tagsViewState',
  state: (): TagsViewState => ({
    visitedViews: [],
    cachedViews: [],
  }),
  getters: {},
  actions: {
    addView(view: TagView) {
      this.addVisitedView(view);
      this.addCachedView(view);
    },
    addVisitedView(view: TagView) {
      if (
        this.visitedViews.some((v, index) => {
          if (v.path === view.path) {
            if (v.fullPath !== view.fullPath) {
              // 防止 query 参数丢失
              this.visitedViews[index] = Object.assign({}, view);
            }
            return true;
          }
        })
      ) {
        return;
      }
      this.visitedViews.push(Object.assign({}, view));
    },
    addCachedView(view: TagView) {
      if (typeof view.name !== 'string') return;
      if (this.cachedViews.includes(view.name)) return;
      if (!view.meta?.noCache) {
        this.cachedViews.push(view.name);
      }
    },
    delView(view: TagView) {
      this.delVisitedView(view);
      this.delCachedView(view);
    },
    delVisitedView(view: TagView) {
      for (const [i, v] of this.visitedViews.entries()) {
        if (v.path === view.path) {
          this.visitedViews.splice(i, 1);
          break;
        }
      }
    },
    delCachedView(view: TagView) {
      if (typeof view.name !== 'string') return;
      const index = this.cachedViews.indexOf(view.name);
      index > -1 && this.cachedViews.splice(index, 1);
    },
    delOtherView(view: TagView) {
      this.delOthersVisitedViews(view);
      this.delOthersCachedViews(view);
    },
    delOthersVisitedViews(view: TagView) {
      this.visitedViews = this.visitedViews.filter((v) => {
        return v.meta?.affix || v.path === view.path;
      });
    },
    delOthersCachedViews(view: TagView) {
      if (typeof view.name !== 'string') return;
      const index = this.cachedViews.indexOf(view.name);
      if (index > -1) {
        this.cachedViews = this.cachedViews.slice(index, index + 1);
      } else {
        // if index = -1, there is no cached tags
        this.cachedViews = [];
      }
    },
    otherViews(view: TagView) {
      this.delOthersVisitedViews(view);
      this.delOthersCachedViews(view);
    },
    delAllViews() {
      this.delAllVisitedViews();
      this.delAllCachedViews();
    },
    delAllVisitedViews() {
      // keep affix tags
      const affixTags = this.visitedViews.filter((tag) => tag.meta?.affix);
      this.visitedViews = affixTags;
    },
    delAllCachedViews() {
      this.cachedViews = [];
    },
    updateVisitedView(view: TagView) {
      for (let v of this.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view);
          break;
        }
      }
    },
  },
});
