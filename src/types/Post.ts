export interface PostApi {
  id: string;
  owner_id: string;
  parent_id: unknown;
  slug: string;
  title: string;
  status: string;
  source_url: unknown;
  created_at: string;
  updated_at: string;
  published_at: string;
  deleted_at: unknown;
  owner_username: string;
  tab_coins: number;
  children_deep_count: 0
}

export interface Post {
    id: string;
    owenerId: string;
    parentId: unknown;
    slug: string;
    title: string;
    status: string;
    sourceUrl: unknown;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    deletedAt: unknown;
    ownerUsername: string;
    tabCoins: number;
    childrenDeepCount: 0
}


export const postApiToPost = (postApi: PostApi): Post => {
    return {
        id: postApi.id,
        owenerId: postApi.owner_id,
        parentId: postApi.parent_id,
        slug: postApi.slug,
        title: postApi.title,
        status: postApi.status,
        sourceUrl: postApi.source_url,
        createdAt: postApi.created_at,
        updatedAt: postApi.updated_at,
        publishedAt: postApi.published_at,
        deletedAt: postApi.deleted_at,
        ownerUsername: postApi.owner_username,
        tabCoins: postApi.tab_coins,
        childrenDeepCount: postApi.children_deep_count
    };
};
