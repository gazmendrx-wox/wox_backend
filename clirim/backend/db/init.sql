CREATE TABLE public.users
(
    id serial NOT NULL,
    name character varying(191) NOT NULL,
    email character varying(191) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp(0) without time zone NOT NULL DEFAULT now(),
    modified_at timestamp(0) without time zone,
    PRIMARY KEY (id),
    CONSTRAINT unique_email UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to root;
/** end of users table init **/

CREATE TABLE public.reviews
(
    id bigserial NOT NULL,
    value text NOT NULL,
    created_at date NOT NULL DEFAULT CURRENT_DATE,
    modifiet_at date,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.reviews
    OWNER to root;