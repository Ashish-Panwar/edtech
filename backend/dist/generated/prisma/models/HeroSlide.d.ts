import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type HeroSlideModel = runtime.Types.Result.DefaultSelection<Prisma.$HeroSlidePayload>;
export type AggregateHeroSlide = {
    _count: HeroSlideCountAggregateOutputType | null;
    _avg: HeroSlideAvgAggregateOutputType | null;
    _sum: HeroSlideSumAggregateOutputType | null;
    _min: HeroSlideMinAggregateOutputType | null;
    _max: HeroSlideMaxAggregateOutputType | null;
};
export type HeroSlideAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type HeroSlideSumAggregateOutputType = {
    sortOrder: number | null;
};
export type HeroSlideMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    subtitle: string | null;
    description: string | null;
    ctaPrimaryText: string | null;
    ctaPrimaryHref: string | null;
    ctaSecondaryText: string | null;
    ctaSecondaryHref: string | null;
    image: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HeroSlideMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    subtitle: string | null;
    description: string | null;
    ctaPrimaryText: string | null;
    ctaPrimaryHref: string | null;
    ctaSecondaryText: string | null;
    ctaSecondaryHref: string | null;
    image: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HeroSlideCountAggregateOutputType = {
    id: number;
    title: number;
    subtitle: number;
    description: number;
    ctaPrimaryText: number;
    ctaPrimaryHref: number;
    ctaSecondaryText: number;
    ctaSecondaryHref: number;
    image: number;
    sortOrder: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type HeroSlideAvgAggregateInputType = {
    sortOrder?: true;
};
export type HeroSlideSumAggregateInputType = {
    sortOrder?: true;
};
export type HeroSlideMinAggregateInputType = {
    id?: true;
    title?: true;
    subtitle?: true;
    description?: true;
    ctaPrimaryText?: true;
    ctaPrimaryHref?: true;
    ctaSecondaryText?: true;
    ctaSecondaryHref?: true;
    image?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HeroSlideMaxAggregateInputType = {
    id?: true;
    title?: true;
    subtitle?: true;
    description?: true;
    ctaPrimaryText?: true;
    ctaPrimaryHref?: true;
    ctaSecondaryText?: true;
    ctaSecondaryHref?: true;
    image?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HeroSlideCountAggregateInputType = {
    id?: true;
    title?: true;
    subtitle?: true;
    description?: true;
    ctaPrimaryText?: true;
    ctaPrimaryHref?: true;
    ctaSecondaryText?: true;
    ctaSecondaryHref?: true;
    image?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type HeroSlideAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HeroSlideWhereInput;
    orderBy?: Prisma.HeroSlideOrderByWithRelationInput | Prisma.HeroSlideOrderByWithRelationInput[];
    cursor?: Prisma.HeroSlideWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HeroSlideCountAggregateInputType;
    _avg?: HeroSlideAvgAggregateInputType;
    _sum?: HeroSlideSumAggregateInputType;
    _min?: HeroSlideMinAggregateInputType;
    _max?: HeroSlideMaxAggregateInputType;
};
export type GetHeroSlideAggregateType<T extends HeroSlideAggregateArgs> = {
    [P in keyof T & keyof AggregateHeroSlide]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHeroSlide[P]> : Prisma.GetScalarType<T[P], AggregateHeroSlide[P]>;
};
export type HeroSlideGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HeroSlideWhereInput;
    orderBy?: Prisma.HeroSlideOrderByWithAggregationInput | Prisma.HeroSlideOrderByWithAggregationInput[];
    by: Prisma.HeroSlideScalarFieldEnum[] | Prisma.HeroSlideScalarFieldEnum;
    having?: Prisma.HeroSlideScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HeroSlideCountAggregateInputType | true;
    _avg?: HeroSlideAvgAggregateInputType;
    _sum?: HeroSlideSumAggregateInputType;
    _min?: HeroSlideMinAggregateInputType;
    _max?: HeroSlideMaxAggregateInputType;
};
export type HeroSlideGroupByOutputType = {
    id: string;
    title: string;
    subtitle: string | null;
    description: string | null;
    ctaPrimaryText: string | null;
    ctaPrimaryHref: string | null;
    ctaSecondaryText: string | null;
    ctaSecondaryHref: string | null;
    image: string | null;
    sortOrder: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: HeroSlideCountAggregateOutputType | null;
    _avg: HeroSlideAvgAggregateOutputType | null;
    _sum: HeroSlideSumAggregateOutputType | null;
    _min: HeroSlideMinAggregateOutputType | null;
    _max: HeroSlideMaxAggregateOutputType | null;
};
export type GetHeroSlideGroupByPayload<T extends HeroSlideGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HeroSlideGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HeroSlideGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HeroSlideGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HeroSlideGroupByOutputType[P]>;
}>>;
export type HeroSlideWhereInput = {
    AND?: Prisma.HeroSlideWhereInput | Prisma.HeroSlideWhereInput[];
    OR?: Prisma.HeroSlideWhereInput[];
    NOT?: Prisma.HeroSlideWhereInput | Prisma.HeroSlideWhereInput[];
    id?: Prisma.UuidFilter<"HeroSlide"> | string;
    title?: Prisma.StringFilter<"HeroSlide"> | string;
    subtitle?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    description?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    ctaPrimaryText?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    ctaPrimaryHref?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    ctaSecondaryText?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    ctaSecondaryHref?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    image?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    sortOrder?: Prisma.IntFilter<"HeroSlide"> | number;
    isActive?: Prisma.BoolFilter<"HeroSlide"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"HeroSlide"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HeroSlide"> | Date | string;
};
export type HeroSlideOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    subtitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    ctaPrimaryText?: Prisma.SortOrderInput | Prisma.SortOrder;
    ctaPrimaryHref?: Prisma.SortOrderInput | Prisma.SortOrder;
    ctaSecondaryText?: Prisma.SortOrderInput | Prisma.SortOrder;
    ctaSecondaryHref?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HeroSlideWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HeroSlideWhereInput | Prisma.HeroSlideWhereInput[];
    OR?: Prisma.HeroSlideWhereInput[];
    NOT?: Prisma.HeroSlideWhereInput | Prisma.HeroSlideWhereInput[];
    title?: Prisma.StringFilter<"HeroSlide"> | string;
    subtitle?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    description?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    ctaPrimaryText?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    ctaPrimaryHref?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    ctaSecondaryText?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    ctaSecondaryHref?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    image?: Prisma.StringNullableFilter<"HeroSlide"> | string | null;
    sortOrder?: Prisma.IntFilter<"HeroSlide"> | number;
    isActive?: Prisma.BoolFilter<"HeroSlide"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"HeroSlide"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HeroSlide"> | Date | string;
}, "id">;
export type HeroSlideOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    subtitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    ctaPrimaryText?: Prisma.SortOrderInput | Prisma.SortOrder;
    ctaPrimaryHref?: Prisma.SortOrderInput | Prisma.SortOrder;
    ctaSecondaryText?: Prisma.SortOrderInput | Prisma.SortOrder;
    ctaSecondaryHref?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.HeroSlideCountOrderByAggregateInput;
    _avg?: Prisma.HeroSlideAvgOrderByAggregateInput;
    _max?: Prisma.HeroSlideMaxOrderByAggregateInput;
    _min?: Prisma.HeroSlideMinOrderByAggregateInput;
    _sum?: Prisma.HeroSlideSumOrderByAggregateInput;
};
export type HeroSlideScalarWhereWithAggregatesInput = {
    AND?: Prisma.HeroSlideScalarWhereWithAggregatesInput | Prisma.HeroSlideScalarWhereWithAggregatesInput[];
    OR?: Prisma.HeroSlideScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HeroSlideScalarWhereWithAggregatesInput | Prisma.HeroSlideScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"HeroSlide"> | string;
    title?: Prisma.StringWithAggregatesFilter<"HeroSlide"> | string;
    subtitle?: Prisma.StringNullableWithAggregatesFilter<"HeroSlide"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"HeroSlide"> | string | null;
    ctaPrimaryText?: Prisma.StringNullableWithAggregatesFilter<"HeroSlide"> | string | null;
    ctaPrimaryHref?: Prisma.StringNullableWithAggregatesFilter<"HeroSlide"> | string | null;
    ctaSecondaryText?: Prisma.StringNullableWithAggregatesFilter<"HeroSlide"> | string | null;
    ctaSecondaryHref?: Prisma.StringNullableWithAggregatesFilter<"HeroSlide"> | string | null;
    image?: Prisma.StringNullableWithAggregatesFilter<"HeroSlide"> | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"HeroSlide"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"HeroSlide"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HeroSlide"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"HeroSlide"> | Date | string;
};
export type HeroSlideCreateInput = {
    id?: string;
    title: string;
    subtitle?: string | null;
    description?: string | null;
    ctaPrimaryText?: string | null;
    ctaPrimaryHref?: string | null;
    ctaSecondaryText?: string | null;
    ctaSecondaryHref?: string | null;
    image?: string | null;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HeroSlideUncheckedCreateInput = {
    id?: string;
    title: string;
    subtitle?: string | null;
    description?: string | null;
    ctaPrimaryText?: string | null;
    ctaPrimaryHref?: string | null;
    ctaSecondaryText?: string | null;
    ctaSecondaryHref?: string | null;
    image?: string | null;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HeroSlideUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    subtitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaPrimaryText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaPrimaryHref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaSecondaryText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaSecondaryHref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HeroSlideUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    subtitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaPrimaryText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaPrimaryHref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaSecondaryText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaSecondaryHref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HeroSlideCreateManyInput = {
    id?: string;
    title: string;
    subtitle?: string | null;
    description?: string | null;
    ctaPrimaryText?: string | null;
    ctaPrimaryHref?: string | null;
    ctaSecondaryText?: string | null;
    ctaSecondaryHref?: string | null;
    image?: string | null;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HeroSlideUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    subtitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaPrimaryText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaPrimaryHref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaSecondaryText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaSecondaryHref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HeroSlideUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    subtitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaPrimaryText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaPrimaryHref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaSecondaryText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ctaSecondaryHref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HeroSlideCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    subtitle?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    ctaPrimaryText?: Prisma.SortOrder;
    ctaPrimaryHref?: Prisma.SortOrder;
    ctaSecondaryText?: Prisma.SortOrder;
    ctaSecondaryHref?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HeroSlideAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type HeroSlideMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    subtitle?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    ctaPrimaryText?: Prisma.SortOrder;
    ctaPrimaryHref?: Prisma.SortOrder;
    ctaSecondaryText?: Prisma.SortOrder;
    ctaSecondaryHref?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HeroSlideMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    subtitle?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    ctaPrimaryText?: Prisma.SortOrder;
    ctaPrimaryHref?: Prisma.SortOrder;
    ctaSecondaryText?: Prisma.SortOrder;
    ctaSecondaryHref?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HeroSlideSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type HeroSlideSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    subtitle?: boolean;
    description?: boolean;
    ctaPrimaryText?: boolean;
    ctaPrimaryHref?: boolean;
    ctaSecondaryText?: boolean;
    ctaSecondaryHref?: boolean;
    image?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["heroSlide"]>;
export type HeroSlideSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    subtitle?: boolean;
    description?: boolean;
    ctaPrimaryText?: boolean;
    ctaPrimaryHref?: boolean;
    ctaSecondaryText?: boolean;
    ctaSecondaryHref?: boolean;
    image?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["heroSlide"]>;
export type HeroSlideSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    subtitle?: boolean;
    description?: boolean;
    ctaPrimaryText?: boolean;
    ctaPrimaryHref?: boolean;
    ctaSecondaryText?: boolean;
    ctaSecondaryHref?: boolean;
    image?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["heroSlide"]>;
export type HeroSlideSelectScalar = {
    id?: boolean;
    title?: boolean;
    subtitle?: boolean;
    description?: boolean;
    ctaPrimaryText?: boolean;
    ctaPrimaryHref?: boolean;
    ctaSecondaryText?: boolean;
    ctaSecondaryHref?: boolean;
    image?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type HeroSlideOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "subtitle" | "description" | "ctaPrimaryText" | "ctaPrimaryHref" | "ctaSecondaryText" | "ctaSecondaryHref" | "image" | "sortOrder" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["heroSlide"]>;
export type $HeroSlidePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HeroSlide";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        subtitle: string | null;
        description: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        image: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["heroSlide"]>;
    composites: {};
};
export type HeroSlideGetPayload<S extends boolean | null | undefined | HeroSlideDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload, S>;
export type HeroSlideCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HeroSlideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HeroSlideCountAggregateInputType | true;
};
export interface HeroSlideDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HeroSlide'];
        meta: {
            name: 'HeroSlide';
        };
    };
    findUnique<T extends HeroSlideFindUniqueArgs>(args: Prisma.SelectSubset<T, HeroSlideFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HeroSlideClient<runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HeroSlideFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HeroSlideFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HeroSlideClient<runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HeroSlideFindFirstArgs>(args?: Prisma.SelectSubset<T, HeroSlideFindFirstArgs<ExtArgs>>): Prisma.Prisma__HeroSlideClient<runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HeroSlideFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HeroSlideFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HeroSlideClient<runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HeroSlideFindManyArgs>(args?: Prisma.SelectSubset<T, HeroSlideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HeroSlideCreateArgs>(args: Prisma.SelectSubset<T, HeroSlideCreateArgs<ExtArgs>>): Prisma.Prisma__HeroSlideClient<runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HeroSlideCreateManyArgs>(args?: Prisma.SelectSubset<T, HeroSlideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HeroSlideCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HeroSlideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HeroSlideDeleteArgs>(args: Prisma.SelectSubset<T, HeroSlideDeleteArgs<ExtArgs>>): Prisma.Prisma__HeroSlideClient<runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HeroSlideUpdateArgs>(args: Prisma.SelectSubset<T, HeroSlideUpdateArgs<ExtArgs>>): Prisma.Prisma__HeroSlideClient<runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HeroSlideDeleteManyArgs>(args?: Prisma.SelectSubset<T, HeroSlideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HeroSlideUpdateManyArgs>(args: Prisma.SelectSubset<T, HeroSlideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HeroSlideUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HeroSlideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HeroSlideUpsertArgs>(args: Prisma.SelectSubset<T, HeroSlideUpsertArgs<ExtArgs>>): Prisma.Prisma__HeroSlideClient<runtime.Types.Result.GetResult<Prisma.$HeroSlidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HeroSlideCountArgs>(args?: Prisma.Subset<T, HeroSlideCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HeroSlideCountAggregateOutputType> : number>;
    aggregate<T extends HeroSlideAggregateArgs>(args: Prisma.Subset<T, HeroSlideAggregateArgs>): Prisma.PrismaPromise<GetHeroSlideAggregateType<T>>;
    groupBy<T extends HeroSlideGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HeroSlideGroupByArgs['orderBy'];
    } : {
        orderBy?: HeroSlideGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HeroSlideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroSlideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HeroSlideFieldRefs;
}
export interface Prisma__HeroSlideClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HeroSlideFieldRefs {
    readonly id: Prisma.FieldRef<"HeroSlide", 'String'>;
    readonly title: Prisma.FieldRef<"HeroSlide", 'String'>;
    readonly subtitle: Prisma.FieldRef<"HeroSlide", 'String'>;
    readonly description: Prisma.FieldRef<"HeroSlide", 'String'>;
    readonly ctaPrimaryText: Prisma.FieldRef<"HeroSlide", 'String'>;
    readonly ctaPrimaryHref: Prisma.FieldRef<"HeroSlide", 'String'>;
    readonly ctaSecondaryText: Prisma.FieldRef<"HeroSlide", 'String'>;
    readonly ctaSecondaryHref: Prisma.FieldRef<"HeroSlide", 'String'>;
    readonly image: Prisma.FieldRef<"HeroSlide", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"HeroSlide", 'Int'>;
    readonly isActive: Prisma.FieldRef<"HeroSlide", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"HeroSlide", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"HeroSlide", 'DateTime'>;
}
export type HeroSlideFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelect<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
    where: Prisma.HeroSlideWhereUniqueInput;
};
export type HeroSlideFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelect<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
    where: Prisma.HeroSlideWhereUniqueInput;
};
export type HeroSlideFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelect<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
    where?: Prisma.HeroSlideWhereInput;
    orderBy?: Prisma.HeroSlideOrderByWithRelationInput | Prisma.HeroSlideOrderByWithRelationInput[];
    cursor?: Prisma.HeroSlideWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HeroSlideScalarFieldEnum | Prisma.HeroSlideScalarFieldEnum[];
};
export type HeroSlideFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelect<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
    where?: Prisma.HeroSlideWhereInput;
    orderBy?: Prisma.HeroSlideOrderByWithRelationInput | Prisma.HeroSlideOrderByWithRelationInput[];
    cursor?: Prisma.HeroSlideWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HeroSlideScalarFieldEnum | Prisma.HeroSlideScalarFieldEnum[];
};
export type HeroSlideFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelect<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
    where?: Prisma.HeroSlideWhereInput;
    orderBy?: Prisma.HeroSlideOrderByWithRelationInput | Prisma.HeroSlideOrderByWithRelationInput[];
    cursor?: Prisma.HeroSlideWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HeroSlideScalarFieldEnum | Prisma.HeroSlideScalarFieldEnum[];
};
export type HeroSlideCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelect<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HeroSlideCreateInput, Prisma.HeroSlideUncheckedCreateInput>;
};
export type HeroSlideCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HeroSlideCreateManyInput | Prisma.HeroSlideCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HeroSlideCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
    data: Prisma.HeroSlideCreateManyInput | Prisma.HeroSlideCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HeroSlideUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelect<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HeroSlideUpdateInput, Prisma.HeroSlideUncheckedUpdateInput>;
    where: Prisma.HeroSlideWhereUniqueInput;
};
export type HeroSlideUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HeroSlideUpdateManyMutationInput, Prisma.HeroSlideUncheckedUpdateManyInput>;
    where?: Prisma.HeroSlideWhereInput;
    limit?: number;
};
export type HeroSlideUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HeroSlideUpdateManyMutationInput, Prisma.HeroSlideUncheckedUpdateManyInput>;
    where?: Prisma.HeroSlideWhereInput;
    limit?: number;
};
export type HeroSlideUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelect<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
    where: Prisma.HeroSlideWhereUniqueInput;
    create: Prisma.XOR<Prisma.HeroSlideCreateInput, Prisma.HeroSlideUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HeroSlideUpdateInput, Prisma.HeroSlideUncheckedUpdateInput>;
};
export type HeroSlideDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelect<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
    where: Prisma.HeroSlideWhereUniqueInput;
};
export type HeroSlideDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HeroSlideWhereInput;
    limit?: number;
};
export type HeroSlideDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HeroSlideSelect<ExtArgs> | null;
    omit?: Prisma.HeroSlideOmit<ExtArgs> | null;
};
