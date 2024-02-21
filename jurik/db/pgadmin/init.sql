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

ALTER TABLE IF EXISTS paublic.users
    OWNER to root;
/** end of users table init **/